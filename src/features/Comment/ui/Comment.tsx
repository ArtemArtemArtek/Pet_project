import React from "react";
import { Avatar, AvatarSize } from "../../../shared/ui/Avatar/Avatar";
import { CommentType } from "../model/types/Comment_types";
import cls from './Comment.module.scss'

interface CommentComponentProps{
    comment:CommentType
}

export const CommentComponent:React.FC<CommentComponentProps>=(props)=>{
    
    const {comment}=props
    console.log('Rjvvtynfjhbsadbsa'+comment)
    return(
        <div className={cls.comment_wrapper}>
            <div className={cls.title_wrapper}>
                <Avatar src={comment?.user?.avatar} size={AvatarSize.SMALL}/>
                <div className={cls.username_wrapper}>{comment?.user?.username}</div>
            </div>
            <div className={cls.text_wrapper}>
                {comment?.text}
            </div>
        </div>
    )
}