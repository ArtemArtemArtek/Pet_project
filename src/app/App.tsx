// import { Routes, Route, Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import './styles/index.scss';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import ClassNameHelper from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/RouterProvider';
import { NavBar } from '../widgets/NavBar/index';
import { SideBar } from '../widgets/SideBar/MainSideBar/index';


const App = () => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={ClassNameHelper('app', {}, [theme])}>
            <Suspense fallback='Loading...'>
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
