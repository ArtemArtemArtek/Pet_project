// import { Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import ClassNameHelper from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/RouterProvider';
import { NavBar } from '../widgets/NavBar/index';
import { SideBar } from '../widgets/SideBar/MainSideBar/index';
import { Loader } from '../shared/ui/Loader/Loader';
import { useDispatch } from 'react-redux';
import { userActions } from '../entities/User';
import { getUser } from '../entities/User';
import { useSelector } from 'react-redux';

const App = () => {
    const { theme, changeTheme } = useTheme();

    const [isOpened, setIsOpened] = useState(false);
    const dispatch = useDispatch();
    const { init } = useSelector(getUser);

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

    return (
        <div className={ClassNameHelper('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <NavBar className="" />
                <div className="content-page">
                    <SideBar />
                    {init ? <AppRouter /> : null}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
