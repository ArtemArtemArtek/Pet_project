import { StateSchema } from '../../../../app/providers/StoreProvider/';

export const getCommentsData = (state: StateSchema) => {
    return state.comments;
};
