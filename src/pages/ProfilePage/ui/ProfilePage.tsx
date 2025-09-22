import React from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { useEffect } from "react";
import { fetchProfileData } from "../../../entities/ProfileData";
import { AsyncReducerWrapper, ReducerList } from "../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";
import { profileReducer } from "../../../entities/ProfileData/model/slice/profileSlice";
import { getProfileData } from "../../../entities/ProfileData";
import { useSelector } from "react-redux";
import { ProfileCard } from "../../../entities/ProfileData/ui/ProfileCard";

interface ProfilePageProps{
    data?: string
}

const inputReducers: ReducerList={
    profile: profileReducer
}
const ProfilePage:React.FC<ProfilePageProps>=(props)=>{
    const {t} = useTranslation('profile')
    
    const dispatch = useAppDispatch()
    // const profileData = useSelector(getProfileData)
    useEffect(()=>{
        dispatch(fetchProfileData()) 
        // eslint-disable-next-line
    },[])

    return(
        <AsyncReducerWrapper reducers={inputReducers} removeAfterClose>
            <ProfileCard/>
        </AsyncReducerWrapper>
    )
}

export default ProfilePage