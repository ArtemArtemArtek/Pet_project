import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "../../../../shared/ui/Input/Input";
import { getProfileData } from "../../model/selectors/getProfileData";
import { useTranslation } from "react-i18next";
import { ProfileSchema, UserProfile } from "../../model/type/profileSchema";
import cls from './EditProfileCard.module.scss'
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { updateProfileData } from "../../model/service/updateProfileDataThunk";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/config/store";
import { Country, Cities, Currency } from "../../../../shared/consts/enums";

interface EditProfileCardProps {
    profileData: ProfileSchema
}

export const EditProfileCard: React.FC<EditProfileCardProps> = (props) => {

    const { profileData } = props
    const { t } = useTranslation('profile')
    const [userData, setUserData] = useState({} as UserProfile)
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const updateUserData = () => {
        console.log(userData)
        dispatch(updateProfileData(userData))
    }
    console.log(userData)
    useEffect(() => {
        setUserData(profileData?.data)
    }, [profileData])
    return (
        <div className={cls.EditCardWrapper}>
            <div className={cls.inputMargin}>
                {t('Вевдите логин: ')}
                <Input defaultValue={profileData?.data?.username} onChange={(event) => setUserData({ ...userData, username: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите имя: ')}
                <Input defaultValue={profileData?.data?.firstname} onChange={(event) => setUserData({ ...userData, firstname: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите фамилию: ')}
                <Input defaultValue={profileData?.data?.lastname} onChange={(event) => setUserData({ ...userData, lastname: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите ссылку на аватар: ')}
                <Input defaultValue={profileData?.data?.avatar} onChange={(event) => setUserData({ ...userData, avatar: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите возраст: ')}
                <Input defaultValue={profileData?.data?.age} onChange={(event) => setUserData({ ...userData, age: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Выберите страну: ')}
                <select onChange={(event) => setUserData({ ...userData, country: event.currentTarget.value as Country })}>
                    {Object.values(Country).map((value) => (
                        <option value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className={cls.inputMargin}>
                {t('Выберите город: ')}
                <select onChange={(event) => setUserData({ ...userData, city: event.currentTarget.value as Cities })}>
                    {Object.values(Cities).map((value) => (
                        <option value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className={cls.inputMargin}>
                {t('Выберите валюту: ')}
                <select onChange={(event) => setUserData({ ...userData, currency: event.currentTarget.value as Currency })}>
                    {Object.values(Currency).map((value) => (
                        <option value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className={cls.buttonWrapper}>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.cancelUpgradeButton} onClick={() => navigate(-1)}>{t('Отменить')}</Button>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.saveUpgradeButton} onClick={updateUserData}>{t('Редактировать')}</Button>
            </div>
            {/* <div className={cls.avatarWrapper}>
                
                </div> */}
        </div>
    )
}