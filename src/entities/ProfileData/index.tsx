import { fetchProfileData } from './model/service/getProfileDataThunk';
import { getProfileData } from './model/selectors/getProfileData';
import { updateProfileData } from './model/service/updateProfileDataThunk';
import { validateProfileData } from './model/service/validateProfileData/validateProfileData';

export {
    fetchProfileData,
    getProfileData,
    updateProfileData,
    validateProfileData,
};
