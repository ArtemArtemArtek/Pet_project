import { StateSchema } from '../../../../app/providers/StoreProvider/';

export const getScrollData = (state: StateSchema) => {
    return state.save_scroll;
};
