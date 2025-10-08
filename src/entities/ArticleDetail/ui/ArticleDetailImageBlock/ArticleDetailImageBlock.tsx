import React from "react";
import { ArticleImage } from "../../model/types/ArticleDetailTypes";
import cls from './ArticleDetailImageBlock.module.scss'

interface ArticleDetailImageBlock_props{
    image: ArticleImage 
}

export const ArticleDetailImageBlock:React.FC<ArticleDetailImageBlock_props>=(props)=>{
    
    const {image} = props

    return(
        <div className={cls.img_wrapper}>
            <img src={image.src}/>
            <div className={cls.img_title_wrapper}>{image.title}</div>
            </div>
    )
}