import React, { useCallback } from "react";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/config/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { StateSchema } from "../../../../app/providers/StoreProvider";
import Eye_icon from '../../../../shared/assets/icons/Eye.svg'
import Calendar from '../../../../shared/assets/icons/Created_data.svg'
import { Skeleton } from "../../../../shared/ui/Skeleton/Skeleton";
import { Avatar, AvatarSize } from "../../../../shared/ui/Avatar/Avatar";
import { ArticleBlockType, ArticleBlock, ArticleText, ArticleImage, ArticleCode } from "../../model/types/ArticleDetailTypes";
import { ArticleDetailCodeBlock } from "../ArticleDetailCodeBlock/ArticleDetailCodeBlock";
import { ArticleDetailImageBlock } from "../ArticleDetailImageBlock/ArticleDetailImageBlock";
import { ArticleDetailTextBlock } from "../ArticleDetailTextBlock/ArticleDetailTextBlock";
import { CommentComponent } from "../../../../features/Comment";
import { commentSelectors } from "../../../../entities/CommentData";
import cls from './ArticleDetail.module.scss'

export const ArticleDetail: React.FC = React.memo(() => {
    const comments = useSelector(commentSelectors.selectAll)
    const articleData = useSelector((state: StateSchema) => state.article_detail)
    const { t } = useTranslation()

    console.log('COMMENTS'+JSON.stringify(comments[0]))

    const com = {
        id: 1,
        text: "some comment",
        user: {
            id: 1,
            username: 'dsdsdsd',
            avatar: 'https://papik.pro/uploads/posts/2023-03/1678233251_papik-pro-p-avatarki-malenkie-risunki-12.jpg'
        },
    }

    const renderBlock = useCallback((el: ArticleBlock) => {
        switch (el.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleDetailCodeBlock key={el.id} code_block={el as ArticleCode} />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleDetailImageBlock key={el.id} image={el as ArticleImage} />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleDetailTextBlock key={el.id} block={el as ArticleText} />
                )

            default:
                return null
        }
    }, [])


    if (articleData?.isLoading) {
        return (
            <div className={cls.skeleton_wrapper}>
                <Skeleton borderRadius="50%" width="150px" height="150px" className={cls.image_skeleton} />
                <Skeleton height="3px" width="18%" className={cls.title_skeleton} />
                <Skeleton width="10%" className={cls.subtitle_skeleton} />
                <Skeleton width="95%" height="70%" className={cls.content_skeleton} />
            </div>
        )
    }

    if (articleData?.error) {
        return (
            <h1 className={cls.server_error}>{t('Ошибка сервера')}</h1>
        )
    }

    return (
        <>
            <div className={cls.avatar_wrapper}>
                <Avatar size={AvatarSize.MEDIUM} src={articleData?.data?.img} />
            </div>
            <div className={cls.title_wrapper}>{articleData?.data?.title}</div>
            <div className={cls.sub_title_wrapper}>{articleData?.data?.subtitle}</div>
            <div className={cls.created_data_wrapper}>
                <Calendar />
                <p>{articleData?.data?.createdAt}</p>
            </div>
            <div className={cls.views_wrapper}>
                <Eye_icon />
                <p>{articleData?.data?.views}</p>
            </div>
            <div className={cls.blocks_wrapper}>
                {articleData?.data?.blocks?.map(renderBlock)}
            </div>
            <div>
                <hr className={cls.line_design} />
                <div className={cls.coment_title}>{t('Комментарии')}</div>
                {comments.map((el)=>{
                return(     
                    <CommentComponent comment={el} />
                )
                })}
            </div>
        </>
    )
})