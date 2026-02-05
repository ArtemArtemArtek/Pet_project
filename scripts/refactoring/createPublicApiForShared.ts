import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedUIPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedDirectory = project.getDirectory(sharedUIPath);
const sharedDirectories = sharedDirectory?.getDirectories();

sharedDirectories?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const hasIndexFile = directory.getSourceFile(indexFilePath);
    console.log(hasIndexFile);

    if (!hasIndexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}'`;
        const file = directory.createSourceFile(indexFilePath, sourceCode);
        file.save();
    }
});

// files.forEach((currentFile)=>{
//     console.log(currentFile.getImportDeclarations())
// })

// console.log(sharedUIPath)
