import React from 'react';
import { useSelector } from 'react-redux';
import { fetchProfileData, getProfileData } from '../..//entities/ProfileData';
import { profileReducer } from '../../entities/ProfileData/model/slice/profileSlice';
import {
    ReducerList,
    AsyncReducerWrapper,
} from '../../shared/lib/asyncReducerWrapper/asyncReducerWrapper';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/providers/StoreProvider/config/store';
import { EditProfileCard } from '../../entities/ProfileData/ui/EditProfileCard/EditProfileCard';
import { getUser } from '../../entities/User';
import { PageWrapper } from '../../widgets/PageWrapper/PageWrapper';

const inputReducers: ReducerList = {
    profile: profileReducer,
};

export const EditProfilePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isAuth } = useSelector(getUser);

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchProfileData(isAuth.id.toString()));
        // eslint-disable-next-line
    }, []);

    const profileData = useSelector(getProfileData);

    return (
        <PageWrapper data-testid="EditProfilePage">
            <AsyncReducerWrapper
                reducers={inputReducers}
                removeAfterClose>
                <EditProfileCard />
            </AsyncReducerWrapper>
        </PageWrapper>
    );
};
