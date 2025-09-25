import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "../../../../shared/ui/Input/Input";
import { getProfileData } from "../../model/selectors/getProfileData";
import { useTranslation } from "react-i18next";
import { ProfileSchema } from "../../model/type/profileSchema";
import cls from './EditProfileCard.module.scss'

interface EditProfileCardProps{
    profileData: ProfileSchema
}

export const EditProfileCard:React.FC<EditProfileCardProps>=(props)=>{
   
    const {profileData} = props
    const { t } = useTranslation('profile')
    // const profileData = useSelector(getProfileData)
    const [userData, setUserData] = useState(profileData?.data)
    
    // useEffect(()=>{
    //     setUserData(profileData?.data)
    // },[profileData])
    
    return(
         <div>
                <div className={cls.inputMargin}>
                    {t('Вевдите логин: ')}
                    <Input defaultValue={profileData?.data?.username} onChange={(event) => setUserData({ ...userData, username: event.currentTarget.value })} />
                </div>
                <div className={cls.inputMargin}>
                    {t('Введите имя: ')}
                    <Input defaultValue={profileData?.data?.firstname} onChange={(event) => setUserData({ ...userData, firstname: event.currentTarget.value })} />
                </div>
                <div>
                    {t('Введите фамилию: ')}
                    <Input defaultValue={profileData?.data?.lastname} onChange={(event) => setUserData({ ...userData, lastname: event.currentTarget.value })} />
                </div>
                <div>
                    {t('Введите возраст: ')}
                    <Input defaultValue={profileData?.data?.age} onChange={(event) => setUserData({ ...userData, age: event.currentTarget.value })} />
                </div>
                <div>
                    {t('Введите страну: ')}
                    {profileData?.data?.country}
                </div>
                <div>
                    {t('Введите город: ')}
                    {profileData?.data?.city}
                </div>
                <div>
                    {t('Введите валюта: ')}
                    {profileData?.data?.currency}
                </div>
                {/* <div className={cls.avatarWrapper}>
                
                </div> */}
            </div>
    )
}