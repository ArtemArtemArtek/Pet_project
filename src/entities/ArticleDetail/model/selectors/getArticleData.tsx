import { StateSchema } from '../../../../app/providers/StoreProvider';

export const getArticleDetailData = (state: StateSchema) => {
    return state.article_detail;
};
