import React, { useCallback, useEffect } from "react";
import Modal from "../../../shared/ui/Modal/Modal";
import { Button, ButtonSize, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input, InputThemes } from "../../../shared/ui/Input/Input";
import cls from "./AuthModal.module.scss"
import { useSelector } from "react-redux";
import { authUser } from "../model/service/asyncThunk";
import { authActions, authReducer } from "../model/slice/AuthSlice";
import { getAuth } from "../model/selectors/selectAuthData";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { useStore } from "react-redux";
import { ReducerManagerStore } from "../../../app/providers/StoreProvider";
import { AsyncReducerWrapper } from "../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";
import { ReducerList } from "../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";

interface AuthModalProps {
    className: string,
    opened: boolean,
    setOpen: () => void
}

const inputReducers: ReducerList={
    auth: authReducer
}

export const AuthModal: React.FC<AuthModalProps> = React.memo((props) => {

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { password, username } = useSelector(getAuth) || {}

    // const store = useStore() as ReducerManagerStore

    // useEffect(() => {
    //     console.log(store.reducerManager)
    //     store.reducerManager.add('auth', authReducer)
    //     dispatch({ type: 'INIT AuthModal' })

    //     return () => {
    //         store.reducerManager.remove('auth')
    //         dispatch({ type: 'DESTROY AuthModal' })
    //     }
    //     //eslint-disable-next-line
    // }, [])

    const changeLogin = useCallback((data: string) => {
        console.log(data)
        dispatch(authActions.setLogin(data))
    }, [dispatch])

    const changePassword = useCallback((data: string) => {
        dispatch(authActions.setPassword(data))
    }, [dispatch])

    const sendData = useCallback(() => {
        dispatch(authUser({ password: password, username: username }))
    }, [dispatch, password, username])


    return (
        <AsyncReducerWrapper reducers={inputReducers} removeAfterClose={true}>
            <Modal className={props.className} opened={props.opened} setOpen={props.setOpen}>
                <div className={cls.formWrapper}>
                    <h3>{t('Логин')}</h3>
                    <Input placeholder={t('Введите логин')} theme={InputThemes.DRFAULT} onChange={(e) => changeLogin(e.target.value)} />
                    {/* <input onChange={(e)=>changeLogin(e.target.value)}/> */}
                    <h3 style={{ marginTop: 15 }}>{t('Пароль')}</h3>
                    <Input placeholder={t('Введите пароль')} theme={InputThemes.DRFAULT} onChange={(e) => changePassword(e.target.value)} />
                    <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SIZE_XL} className={cls.custom_button} onClick={sendData}>{t('Войти')}</Button>
                </div>
            </Modal>
        </AsyncReducerWrapper>
    )
})

