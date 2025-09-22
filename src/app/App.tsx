// import { Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import ClassNameHelper from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/RouterProvider';
import { NavBar } from '../widgets/NavBar/index';
import { SideBar } from '../widgets/SideBar/MainSideBar/index';
import { Loader } from '../shared/ui/Loader/Loader';
import Modal from '../shared/ui/Modal/Modal';
import {LOCAL_USER_AUTH_KEY} from '../shared/consts/consts'
import { useDispatch } from 'react-redux';
import { userActions } from '../entities/User';

const App = () => {
    const { theme, changeTheme } = useTheme()

    const [isOpened, setIsOpened] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userActions.initUserData())
    },[dispatch])
    return (


        <div className={ClassNameHelper('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <NavBar className='' />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
