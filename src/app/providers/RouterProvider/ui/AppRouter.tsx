import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { RouteConfig } from '../lib/routeConfig';
import cls from './AppRouter.module.scss'

// const AboutPageLazy = React.lazy(() => import('../../../../pages/AboutPage').then(module => ({ default: module.AboutPage })));
// const MainPageLazy = React.lazy(() => import('../../../../pages/MainPage').then(module => ({ default: module.MainPage })));

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
             {Object.values(RouteConfig).map(({path, element})=>(
                    <Route key={path} path={path} element={
                        <div className={cls.pageWrapper}>{element}</div>}/>
             ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter