import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '../../../../shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { UserProfile } from '../../model/type/profileSchema';
import cls from './EditProfileCard.module.scss';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { updateProfileData } from '../../model/service/updateProfileDataThunk';
import { useAppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import { Country, Cities, Currency } from '../../../../shared/consts/enums';
import { ListboxItem } from '../../../../shared/ui/ListBox/ListBox';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileData } from '../../model/selectors/getProfileData';
import { Loader } from '../../../../shared/ui/Loader/Loader';

export const EditProfileCard: React.FC = React.memo(() => {
    // const { profileData } = props
    const { t } = useTranslation('profile');
    const [userData, setUserData] = useState({} as UserProfile);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileData);

    const updateUserData = useCallback(() => {
        //@ts-ignore
        dispatch(updateProfileData(userData));
    }, [userData, dispatch]);

    const cancelButton = useCallback(() => {
        navigate(-1);
        //eslint-disable-next-line
    }, []);

    const CurrencyItems: ListboxItem[] = useMemo(
        () => [
            {
                value: Currency.EUR,
                content: t('Евро'),
            },
            {
                value: Currency.RUB,
                content: t('Рубли'),
            },
            {
                value: Currency.USD,
                content: t('Доллары'),
            },
        ],
        [t],
    );

    if (profileData?.isLoading) {
        return <Loader />;
    }

    const ChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileActions.setUsername(event.currentTarget.value));
    };
    const ChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileActions.setFirstName(event.currentTarget.value));
    };
    const ChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileActions.setLastName(event.currentTarget.value));
    };
    const ChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileActions.setAvatar(event.currentTarget.value));
    };
    const ChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileActions.setAge(event.currentTarget.value));
    };
    const ChangeCity = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(profileActions.setCity(event.currentTarget.value as Cities));
    };
    const ChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(
            profileActions.setCountry(event.currentTarget.value as Country),
        );
    };
    const ChangeCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(
            profileActions.setCurrency(event.currentTarget.value as Currency),
        );
    };
    // const ChangeCurrency = useCallback(

    //     // (value:string) => dispatch(profileActions.setCurrency(value as Currency)),
    //     (value:string) =>{
    //         // console.log('dsd')
    //     },
    //     //eslint-disable-next-line
    //     [])

    return (
        <div className={cls.EditCardWrapper}>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.firstNameError}
            </div>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.lastNameError}
            </div>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.userNameError}
            </div>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.ageError}
            </div>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.avatarError}
            </div>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.cityError}
            </div>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.countryError}
            </div>
            <div className={cls.errorMessage}>
                {profileData?.validateError?.currencyError}
            </div>
            <div className={cls.inputMargin}>
                {t('Вевдите логин: ')}
                <Input
                    key={1}
                    defaultValue={profileData?.data?.username}
                    onChange={ChangeLogin}
                />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите имя: ')}
                <Input
                    data-testid="EditCardFirstname"
                    key={2}
                    defaultValue={profileData?.data?.firstname}
                    onChange={ChangeFirstName}
                />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите фамилию: ')}
                <Input
                    data-testid="EditCardLastname"
                    key={3}
                    defaultValue={profileData?.data?.lastname}
                    onChange={ChangeLastName}
                />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите ссылку на аватар: ')}
                <Input
                    key={4}
                    defaultValue={profileData?.data?.avatar}
                    onChange={ChangeAvatar}
                />
            </div>
            <div className={cls.inputMargin}>
                {t('Введите возраст: ')}
                <Input
                    key={5}
                    defaultValue={profileData?.data?.age}
                    onChange={ChangeAge}
                />
            </div>
            <div className={cls.inputMargin}>
                {t('Выберите страну: ')}
                <select
                    onChange={ChangeCountry}
                    defaultValue={profileData?.data?.country}>
                    {Object.values(Country).map((value) => (
                        <option
                            key={value}
                            value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className={cls.inputMargin}>
                {t('Выберите город: ')}
                <select
                    onChange={ChangeCity}
                    defaultValue={profileData?.data?.city}>
                    {Object.values(Cities).map((value) => (
                        <option
                            key={value}
                            value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className={cls.inputMargin}>
                {/* <ListBox label={t('Выберите валюту')} value={profileData?.data?.currency} items={CurrencyItems} onChangeHandler={ChangeCurrency}/> */}

                {t('Выберите валюту: ')}
                <select
                    onChange={ChangeCurrency}
                    defaultValue={profileData?.data?.currency}>
                    {Object.values(Currency).map((value) => (
                        <option value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className={cls.buttonWrapper}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.cancelUpgradeButton}
                    onClick={cancelButton}>
                    {t('Отменить')}
                </Button>
                <Button
                    data-testid="EditCardChangeButton"
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.saveUpgradeButton}
                    onClick={updateUserData}>
                    {t('Редактировать')}
                </Button>
            </div>
        </div>
    );
});
