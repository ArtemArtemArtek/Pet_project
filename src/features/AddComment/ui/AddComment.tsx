import React, { useCallback } from 'react';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import SendMessage from '../../../shared/assets/icons/SendMessage.svg';
import { useAppDispatch } from '..//../../app/providers/StoreProvider/config/store';
import { addNewCommentData } from '../../../entities/CommentData';
import { useState } from 'react';
import cls from './AddComment.module.scss';

export const AddComment: React.FC = () => {
    const [commentText, setCommentText] = useState('');
    const dispatch = useAppDispatch();

    const changeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value);
    }, []);

    const sendComment = useCallback(() => {
        //@ts-ignore
        dispatch(addNewCommentData(commentText));
        setCommentText('');
        const input = document.getElementById('comInput') as HTMLInputElement;
        input.value = '';
    }, [dispatch, commentText]);

    return (
        <div
            data-testid="CommentInputField"
            className={cls.add_comment_wrapper}>
            <input
                id="comInput"
                onChange={changeText}
                defaultValue={commentText}
                className={cls.input_effect}
            />
            <Button
                data-testid="SendCommentButton"
                onClick={sendComment}
                className={cls.button_style}
                theme={ButtonTheme.CLEAR}>
                <SendMessage className={cls.icon_style} />
            </Button>
        </div>
    );
};
