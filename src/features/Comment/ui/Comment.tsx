import React from 'react';
import { Avatar, AvatarSize } from '../../../shared/ui/Avatar/Avatar';
import { CommentType } from '../model/types/Comment_types';
import cls from './Comment.module.scss';
import { useNavigate } from 'react-router-dom';

interface CommentComponentProps {
    comment: CommentType;
}

export const CommentComponent: React.FC<CommentComponentProps> = (props) => {
    const { comment } = props;
    const navigate = useNavigate();

    const profileRedirect = () => {
        navigate('/profile/' + comment.user.id);
    };
    return (
        <div
            data-testid="CommentOnArticlePage"
            className={cls.comment_wrapper}>
            <div className={cls.title_wrapper}>
                <Avatar
                    onClick={profileRedirect}
                    src={comment?.user?.avatar}
                    size={AvatarSize.SMALL}
                />
                <div
                    onClick={profileRedirect}
                    className={cls.username_wrapper}>
                    {comment?.user?.username}
                </div>
            </div>
            <div className={cls.text_wrapper}>{comment?.body}</div>
        </div>
    );
};
