import React from "react";
import { useTranslation } from "react-i18next";
import { ProfileSchema } from "../../entities/ProfileData/model/type/profileSchema";

interface EditProfilePageProps {
    profileData: ProfileSchema
}

export const EditProfilePage: React.FC<EditProfilePageProps> = (props) => {

    const { profileData } = props

    const { t } = useTranslation('profile')


    return (
        <div>
            <div>
                {t('Логин: ')}
                {profileData?.data?.username}
            </div>
            <div>
                {t('Имя: ')}
                {profileData?.data?.firstname}
            </div>
            <div>
                {t('Фамилия: ')}
                {profileData?.data?.lastname}
            </div>
            <div>
                {t('Возраст: ')}
                {profileData?.data?.age}
            </div>
            <div>
                {t('Страна: ')}
                {profileData?.data?.country}
            </div>
            <div>
                {t('Город: ')}
                {profileData?.data?.city}
            </div>
            <div>
                {t('Валюта: ')}
                {profileData?.data?.currency}
            </div>
            <div className={cls.avatarWrapper}>
                
            </div>
        </div>
    )
}