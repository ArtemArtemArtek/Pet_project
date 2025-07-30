// import { Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import ClassNameHelper from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/RouterProvider';
import { NavBar } from '../widgets/NavBar/index';
import { SideBar } from '../widgets/SideBar/MainSideBar/index';
import { Loader } from '../shared/ui/Loader/Loader';


const App = () => {
    const { theme, changeTheme } = useTheme()

    // useEffect(() => {
    //     if (Math.random() < 0.5) {
    //         throw new Error('Произошла запланированная ошибка')
    //     }
    //     console.log('Error 121212121')
    // }, [])

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
