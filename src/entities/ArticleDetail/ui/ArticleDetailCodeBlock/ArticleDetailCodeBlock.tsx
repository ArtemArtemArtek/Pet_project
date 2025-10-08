import React from "react";
import cls from './ArticleDetailCodeBlock.module.scss'
import { ArticleCode } from "../../model/types/ArticleDetailTypes";
import { Button, ButtonSize, ButtonTheme } from "../../../../shared/ui/Button/Button";
import CopyIcon from '../../../../shared/assets/icons/Copy.svg'

interface ArticleDetailCodeBlock_props {
    code_block: ArticleCode
}

export const ArticleDetailCodeBlock: React.FC<ArticleDetailCodeBlock_props> = (props) => {

    const { code_block } = props

    const copyFunction = () => {
        navigator.clipboard.writeText(code_block.code)
    }

    return (

        <pre className={cls.code_wrapper}>
            <Button
                onClick={copyFunction}
                className={cls.copy_button_wrapper}
                theme={ButtonTheme.BACKGROUND}>
                <CopyIcon className={cls.copy_icon} />
            </Button>
            <code >
                {code_block.code}
            </code>
        </pre>
    )
}