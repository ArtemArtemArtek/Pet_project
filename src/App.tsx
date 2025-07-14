import { Routes, Route, Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import './styles/index.scss';
import useTheme from './theme/useTheme';
import ClassNameHelper from './helpers/classNames';
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const MainPage = React.lazy(() => import('./pages/MainPage'));

const App = () => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={ClassNameHelper('app', {}, [theme])}>
            <button onClick={() => changeTheme()}>Change Theme</button>
            <Link to="/">Main Page</Link>
            <Link to="/about">About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
