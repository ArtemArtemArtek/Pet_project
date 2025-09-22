import React from "react";
import { getProfileData } from "../model/selectors/getProfileData";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface ProfileCardProps{
    className?:string
}

export const ProfileCard:React.FC<ProfileCardProps> =()=>{
    console.log('ProfileCard')
    const profileData=useSelector(getProfileData)
    const { t } = useTranslation('profile')

    return(
        
        <div>
            {profileData?.error&&<div>{t('Ошибка')}</div>}
            {profileData?.isLoading?<div>Loading...</div>:
            <div>
            {profileData?.data?.firstname}
            {profileData?.data?.lastname}
            </div>            
            }
        </div>
    )
}