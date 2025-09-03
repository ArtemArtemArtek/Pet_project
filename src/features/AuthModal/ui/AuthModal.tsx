import React from "react";
import Modal from "../../../shared/ui/Modal/Modal";
import { Button, ButtonSize, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input,InputThemes } from "../../../shared/ui/Input/Input";
import cls from "./AuthModal.module.scss"

interface AuthModalProps{
    className: string,
    opened: boolean,
    setOpen:()=>void
}

export const AuthModal:React.FC<AuthModalProps>=React.memo((props)=>{
    
    const {t}=useTranslation()

    return(
    <Modal className={props.className} opened={props.opened} setOpen={props.setOpen}>
        <div className={cls.formWrapper}>
            <h3>{t('Логин')}</h3>
            <Input placeholder={t('Введите логин')} theme={InputThemes.DRFAULT}/>
            <h3 style={{marginTop:15}}>{t('Пароль')}</h3>
            <Input placeholder={t('Введите пароль')} theme={InputThemes.DRFAULT}/>
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SIZE_XL} className={cls.custom_button}>{t('Войти')}</Button>
        </div>
    </Modal>
    )
})

