import { EntityState } from '@reduxjs/toolkit';
import { ArticleDetailType } from './ArticleDetailTypes';

export interface ArticleDetailSchema {
    data?: ArticleDetailType;
    error?: string;
    isLoading: boolean;
}

export interface RecomendationSchema extends EntityState<
    ArticleDetailType,
    number
> {
    error?: string;
    isLoading: boolean;
}
