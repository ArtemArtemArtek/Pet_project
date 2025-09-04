import React, { useCallback } from "react";
import Modal from "../../../shared/ui/Modal/Modal";
import { Button, ButtonSize, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input,InputThemes } from "../../../shared/ui/Input/Input";
import cls from "./AuthModal.module.scss"
import { useDispatch } from "react-redux";
import { authActions } from "../model/slice/AuthSlice";

interface AuthModalProps{
    className: string,
    opened: boolean,
    setOpen:()=>void
}

export const AuthModal:React.FC<AuthModalProps>=React.memo((props)=>{
    
    const {t}=useTranslation()
    const dispatch = useDispatch()

    const changeLogin=useCallback((data: string)=>{
        dispatch(authActions.setLogin(data))
    }, [dispatch])

    const changePassword=useCallback((data: string)=>{
        dispatch(authActions.setPassword(data))
    }, [dispatch])

    return(
    <Modal className={props.className} opened={props.opened} setOpen={props.setOpen}>
        <div className={cls.formWrapper}>
            <h3>{t('Логин')}</h3>
            <Input placeholder={t('Введите логин')} theme={InputThemes.DRFAULT} onChange={()=>changeLogin}/>
            <h3 style={{marginTop:15}}>{t('Пароль')}</h3>
            <Input placeholder={t('Введите пароль')} theme={InputThemes.DRFAULT} onChange={()=>changePassword}/>
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SIZE_XL} className={cls.custom_button}>{t('Войти')}</Button>
        </div>
    </Modal>
    )
})

