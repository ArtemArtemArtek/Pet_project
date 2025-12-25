import React, { useState } from "react";
import { ArticleItem } from "../ArticleItem/ArticleItem";
import cls from './ArticleItemList.module.scss'
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import ListIcon from '../../../../shared/assets/icons/list.svg'
import Tiles from '../../../../shared/assets/icons/tiles.svg'
import { useSelector } from "react-redux";
import { articlesSelectors } from "../../model/slice/articlesSlice";
import { getArticlesData } from "../../model/selectors/selectArticlesData";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/config/store";
import { articlesActions } from "../../model/slice/articlesSlice";
import { ArticlesView } from "../../model/types/articleTypes";

interface ArticleItemListProps {
    view: ArticlesView
    onViewClick?: (view: ArticlesView) => void;
}

export const ArticleItemList: React.FC<ArticleItemListProps> = (props) => {

    const { view, onViewClick } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const articlesData = useSelector(getArticlesData)
    const articles = useSelector(articlesSelectors.selectAll)


    const [viewArticle, setViewArticle] = useState(view)

    const ChangeView = () => {
        setViewArticle(viewArticle === ArticlesView.BIG ? ArticlesView.SMALL : ArticlesView.BIG)
        dispatch(articlesActions.setView(viewArticle === ArticlesView.BIG ? ArticlesView.SMALL : ArticlesView.BIG))
        onViewClick?.(viewArticle === ArticlesView.BIG ? ArticlesView.SMALL : ArticlesView.BIG);
    }

    if (articles.length === 0 && !articlesData.isLoading) {
        return (
            <div className={cls.not_found}>{t('Статьи не найдены')}</div>
        )
    }

    return (
        <div>
            <Button className={cls.button_change} theme={ButtonTheme.CLEAR} onClick={ChangeView}>
                {viewArticle === ArticlesView.BIG ? <Tiles className={cls.view_icons} /> : <ListIcon className={cls.list_icon} />}
            </Button>
            {/*             
            <List 
            rowComponent={(element:ArticleDetailType)=><ArticleItem key={element.id} article={element} articles_view={viewArticle}/>}
            rowCount = {articles.length} 
            rowHeight={25}
            rowProps={articles[1]}/> */}

            <div className={cls.articlesWrapper}>
                {articles.map((element) => (
                    <ArticleItem key={element.id} article={element} articles_view={viewArticle} />
                ))}
                {articlesData.isLoading && <div>{t('Загрузка')}</div>}
            </div>

        </div>
    )
}