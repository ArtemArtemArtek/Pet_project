import React from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileData } from "../../../entities/ProfileData";
import { AsyncReducerWrapper, ReducerList } from "../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";
import { profileReducer } from "../../../entities/ProfileData/model/slice/profileSlice";
import cls from './ProfilePage.module.scss'
import { ProfileCard } from "../../../entities/ProfileData/ui/ProfileCard";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../../entities/User";
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper";

interface ProfilePageProps{
    data?: string
}

const inputReducers: ReducerList={
    profile: profileReducer
}   

const ProfilePage:React.FC<ProfilePageProps>=(props)=>{
    const {t} = useTranslation('profile')
    const navigate = useNavigate();
    const {isAuth} = useSelector(getUser)
    const {userId} = useParams()
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchProfileData(userId)) 
        // eslint-disable-next-line
    },[])

    console.log('USERID:'+userId)
    return(
        <PageWrapper>
        <AsyncReducerWrapper reducers={inputReducers} removeAfterClose>
            <ProfileCard userID={userId}/>
        </AsyncReducerWrapper>
        </PageWrapper>
    )
}

export default ProfilePage