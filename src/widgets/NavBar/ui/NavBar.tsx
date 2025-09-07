import React, { useState } from "react";
import cls from './NavBar.module.scss';
import ClassNameHelper from '../../../shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '../../../shared/ui/AppLink/AppLink'
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { AuthModal } from "../../../features/AuthModal";
import { getUser } from "../../../entities/User";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../entities/User";

interface NavBarProps {
    className: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
    
    const [opened, setIsOpened]=useState(false)
    const {isAuth} = useSelector(getUser)
    const {t} = useTranslation('navbar')
    const dispatch = useDispatch()

    const logOut=()=>{
        dispatch(userActions.logout())
    }

    return (
        <div className={ClassNameHelper(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                {isAuth? 
                <div>
                {/* <h3>{isAuth.username}</h3>    */}
                <Button onClick={()=>logOut()} theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Выйти')}</Button>
                </div>
                :
                <div>
                <Button onClick={()=>setIsOpened(true)} theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Войти')}</Button>
                <AuthModal className={ClassNameHelper(cls.authModal, {}, [className])} opened={opened} setOpen={()=>setIsOpened(false)} />
                </div>
            }
            </div>
        </div>
    )
}

export default NavBar