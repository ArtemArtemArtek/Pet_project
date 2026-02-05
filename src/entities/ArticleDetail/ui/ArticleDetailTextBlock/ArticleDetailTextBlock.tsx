import React from 'react';
import { ArticleText } from '../../model/types/ArticleDetailTypes';
import cls from './ArticleDetailTextBlock.module.scss';

interface ArticleDetailTextBlock_props {
    block: ArticleText;
}

export const ArticleDetailTextBlock: React.FC<ArticleDetailTextBlock_props> = (
    props,
) => {
    const { block } = props;

    return (
        <div>
            {block.title && (
                <div className={cls.titleWrapper}>{block.title}</div>
            )}
            {block.paragraphs.map((par) => {
                return (
                    <div
                        key={par}
                        className={cls.par_wrapper}>
                        {par}
                    </div>
                );
            })}
        </div>
    );
};
