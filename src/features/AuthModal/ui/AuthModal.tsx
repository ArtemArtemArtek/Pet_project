import React, { useCallback } from "react";
import Modal from "../../../shared/ui/Modal/Modal";
import { Button, ButtonSize, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input,InputThemes } from "../../../shared/ui/Input/Input";
import cls from "./AuthModal.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../model/service/asyncThunk";
import { authActions } from "../model/slice/AuthSlice";
import { getAuth } from "../model/selectors/selectAuthData";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";

interface AuthModalProps{
    className: string,
    opened: boolean,
    setOpen:()=>void
}

export const AuthModal:React.FC<AuthModalProps>=React.memo((props)=>{
    
    const {t}=useTranslation()
    const dispatch = useDispatch()
    const {password, username}=useSelector(getAuth)

    const usdata={
        password:password,
        login: username
    }

    const changeLogin=useCallback((data: string)=>{
        console.log(data)
        dispatch(authActions.setLogin(data))
    }, [dispatch])

    const changePassword=useCallback((data: string)=>{
        dispatch(authActions.setPassword(data))
    }, [dispatch])

    const sendData=useCallback(()=>{
        dispatch(authUser({password: password, username: username}))
    },[dispatch, password, username])


    return(
    <Modal className={props.className} opened={props.opened} setOpen={props.setOpen}>
        <div className={cls.formWrapper}>
            <h3>{t('Логин')}</h3>
            <Input placeholder={t('Введите логин')} theme={InputThemes.DRFAULT} onChange={(e)=>changeLogin(e.target.value)}/>
            {/* <input onChange={(e)=>changeLogin(e.target.value)}/> */}
            <h3 style={{marginTop:15}}>{t('Пароль')}</h3>
            <Input placeholder={t('Введите пароль')} theme={InputThemes.DRFAULT} onChange={(e)=>changePassword(e.target.value)}/>
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SIZE_XL} className={cls.custom_button} onClick={sendData}>{t('Войти')}</Button>
        </div>
    </Modal>
    )
})

