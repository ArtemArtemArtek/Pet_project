import React, { useState } from "react";
import cls from './NavBar.module.scss';
import ClassNameHelper from '../../../shared/lib/classNames/classNames';
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { getUser } from "../../../entities/User";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../entities/User";
import { Dropdown, DropdownItem } from "../../../shared/ui/Menu/Dropdown";
import { Avatar, AvatarSize } from "../../../shared/ui/Avatar/Avatar";
import { PathRoutes } from "../../../shared/configs/routeConfig/routeConfig";
import { UserRoles } from "../../../entities/User/model/type/userSchema";
import { useNavigate } from "react-router-dom";
import { Notifications } from "../../..//features/Notifications";
import NotificationsIcon from '../../../shared/assets/icons/NotificationsIcon.svg'
import { BrowserView, MobileView } from "react-device-detect";

const ModalLazy = React.lazy(() => import('../../../features/AuthModal').then(module => ({ default: module.AuthModal })))
const LogoutModalLazy = React.lazy(() => import('../../../features/LogoutModal').then(module => ({ default: module.LogoutModal })))

interface NavBarProps {
    className: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {

    const [opened, setIsOpened] = useState(false)
    const [openedLogoutModal, setIsOpenedLogoutModal] = useState(false)
    const { isAuth } = useSelector(getUser) || {}
    const { t } = useTranslation('navbar')
    const dispatch = useDispatch()

    const logOut = () => {
        setIsOpenedLogoutModal(false)
        setIsOpened(false)
        dispatch(userActions.logout())
    }

    const navigate = useNavigate()

    const isAdmin = isAuth?.role.includes(UserRoles.ADMIN) || isAuth?.role.includes(UserRoles.MANAGER)

    const DropdownItems: DropdownItem[] = [
        {
            label: 'Профиль',
            href: PathRoutes.profile + isAuth?.id
        },
        ...(isAdmin ? [{
            label: 'Админпанель',
            onClick: () => navigate("/adminpanel")
        }] : []),
        {
            label: 'Выйти',
            onClick: () => setIsOpenedLogoutModal(true)
        }
    ]

    return (
        <div className={ClassNameHelper(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                {isAuth ?
                    <div className={cls.wrapper_actions}>
                        <Notifications className={cls.notification_position} trigger={NotificationsIcon}/>
                        <Dropdown items={DropdownItems} trigger={<Avatar size={AvatarSize.SMALL} src={isAuth.avatar} />} />
                        <LogoutModalLazy className={ClassNameHelper(cls.logoutModal)} opened={openedLogoutModal} setOpen={() => setIsOpenedLogoutModal(false)} logOut={() => logOut()} />
                    </div>
                    :
                    <div>
                        <Button onClick={() => setIsOpened(true)} theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Войти')}</Button>
                        {opened &&
                            <ModalLazy className={ClassNameHelper(cls.authModal, {}, [className])} opened={opened} setOpen={() => setIsOpened(false)} />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar