import React from "react";
import { getProfileData } from "../model/selectors/getProfileData";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ProfileSchema } from "../model/type/profileSchema";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { Avatar, AvatarSize } from "../../../shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import cls from './ProfileCard.module.scss'
import { useNavigate } from "react-router-dom";


interface ProfileCardProps {
    className?: string
    profileData?: ProfileSchema
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    console.log('ProfileCard')
    
    // const {profileData} = props
    const navigate = useNavigate();
    const profileData = useSelector(getProfileData)
    const { t } = useTranslation('profile')

    if(profileData?.error){
        return(
            <div className={cls.CardErrorWrapper}>
                <div className={cls.mainErrorText}>{t('Произошла ошибка сервера')}</div>
                <div className={cls.reloadErrorText}>{t('Попробуйте перезагрузить страницу')}</div>
            </div>
        )
    }

    return (
            profileData?.isLoading ? <Loader/> :
                   <div className={cls.CardWrapper}>
                    <div className={cls.avatarWrapper}>
                        <Avatar src={profileData?.data?.avatar} size={AvatarSize.MEDIUM} bordered/>
                    </div>
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
                    <Button onClick={()=>navigate('/edit')} theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.editProfileButton}>{t('Редактировать профиль')}</Button>
                </div>
    )
}