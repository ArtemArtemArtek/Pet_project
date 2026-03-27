import path from 'path';
import { Project, SyntaxKind } from 'ts-morph';
import { on } from 'ts-node-dev/lib/ipc';

const featureName = process.argv[2]
const optionName = process.argv[3] //on или off

if (!featureName) {
    throw new Error('Укажите название feature флага')
}

if (!optionName) {
    throw new Error('Укажите название option флага')
}

if (optionName !== 'on' && optionName !== 'off') {
    throw new Error('Некорректное название опции(on или off)')
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/ArticleDetail.tsx');
// project.addSourceFilesAtPaths('src/**/*.ts');
// project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles()


files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((descendant) => {
        if (descendant.isKind(SyntaxKind.CallExpression)) {
            descendant.forEachChild((child) => {

                if (child.isKind(SyntaxKind.Identifier) && child.getText() == 'enabledFeatureFlag') {
                    const objectOption = descendant.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)

                    if (!objectOption) {
                        return
                    }

                    const onOption = objectOption.getProperty('on')
                    const offOption = objectOption.getProperty('off')
                    const nameOption = objectOption.getProperty('name')

                    const onFunction = onOption.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
                    const offFunction = offOption.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
                    const nameFeature = nameOption.getFirstDescendantByKind(SyntaxKind.StringLiteral).getText().slice(1, -1)

                    if (nameFeature !== featureName) {
                        return
                    }

                    if (optionName === 'on') {
                        descendant.replaceWithText(onFunction.getBody().getText() ?? '')
                    }

                    if (optionName === 'off') {
                        descendant.replaceWithText(offFunction.getBody().getText() ?? '')
                    }
                }
            })
        }
    })
})