import { StateSchema } from '../../../../app/providers/StoreProvider/';

export const getAuth = (state: StateSchema) => {
    return state.auth;
};
