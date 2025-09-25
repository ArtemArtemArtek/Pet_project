import React from "react";
import { useTranslation } from "react-i18next";
import { ProfileSchema } from "../../entities/ProfileData/model/type/profileSchema";
import { useState } from "react";
import { Input } from "../../shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { fetchProfileData, getProfileData } from "../..//entities/ProfileData";
import { profileReducer } from "../../entities/ProfileData/model/slice/profileSlice";
import { ReducerList, AsyncReducerWrapper } from '../../shared/lib/asyncReducerWrapper/asyncReducerWrapper'
import { useEffect } from "react";
import { useAppDispatch } from "../../app/providers/StoreProvider/config/store";
import { EditProfileCard } from "../../entities/ProfileData/ui/EditProfileCard/EditProfileCard";

const inputReducers: ReducerList = {
    profile: profileReducer
}

export const EditProfilePage: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
        // eslint-disable-next-line
    }, [])
    const profileData = useSelector(getProfileData)

    const { t } = useTranslation('profile')
    // const [userData, setUserData] = useState(data)

    return (
        <AsyncReducerWrapper reducers={inputReducers} removeAfterClose>
           <EditProfileCard profileData={profileData}/>
        </AsyncReducerWrapper>
    )
}