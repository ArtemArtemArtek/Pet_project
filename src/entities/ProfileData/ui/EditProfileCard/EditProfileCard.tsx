import React, { useCallback, useEffect, useState } from "react";
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

// interface EditProfileCardProps {
//     profileData: ProfileSchema
// }

export const EditProfileCard: React.FC = React.memo(() => {

    // const { profileData } = props
    const { t } = useTranslation('profile')
    const [userData, setUserData] = useState({} as UserProfile)
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const profileData = useSelector(getProfileData)

    console.log('Проверка альтернативы:'+ profileData?.data?.age)
    const updateUserData = useCallback(() => {
        dispatch(updateProfileData(userData))
    }, [userData, dispatch])

    const cancelButton=useCallback(()=>{
        navigate(-1)
        //eslint-disable-next-line
    },[])
    
    useEffect(() => {
        setUserData(profileData?.data)
        //eslint-disable-next-line
    }, [])

    console.log(profileData)

    return (
        <div className={cls.EditCardWrapper}>
            <div className={cls.errorMessage}>{profileData?.validateError?.firstNameError}</div>
            <div className={cls.errorMessage}>{profileData?.validateError?.lastNameError}</div>
            <div className={cls.errorMessage}>{profileData?.validateError?.userNameError}</div>
            <div className={cls.errorMessage}>{profileData?.validateError?.ageError}</div>
            <div className={cls.errorMessage}>{profileData?.validateError?.avatarError}</div>
            <div className={cls.errorMessage}>{profileData?.validateError?.cityError}</div>
            <div className={cls.errorMessage}>{profileData?.validateError?.countryError}</div>
            <div className={cls.errorMessage}>{profileData?.validateError?.currencyError}</div>
            <div className={cls.inputMargin}>
                {t('Вевдите логин: ')}
                <Input key={1} defaultValue={profileData?.data?.username} onChange={(event) => setUserData({ ...userData, username: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите имя: ')}
                <Input key={2} defaultValue={profileData?.data?.firstname} onChange={(event) => setUserData({ ...userData, firstname: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите фамилию: ')}
                <Input key={3} defaultValue={profileData?.data?.lastname} onChange={(event) => setUserData({ ...userData, lastname: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите ссылку на аватар: ')}
                <Input key={4} defaultValue={profileData?.data?.avatar} onChange={(event) => setUserData({ ...userData, avatar: event.currentTarget.value })} />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите возраст: ')}
                <Input key={5} defaultValue={profileData?.data?.age} onChange={(event) => setUserData({ ...userData, age: event.currentTarget.value })} />
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
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.cancelUpgradeButton} onClick={cancelButton}>{t('Отменить')}</Button>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.saveUpgradeButton} onClick={updateUserData}>{t('Редактировать')}</Button>
            </div>
            {/* <div className={cls.avatarWrapper}>
                
                </div> */}
        </div>
    )
})