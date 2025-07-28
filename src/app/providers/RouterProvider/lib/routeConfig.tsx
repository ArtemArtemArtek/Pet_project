import { RouteProps } from "react-router-dom"
import React from "react";
import { PathRoutes, AppRoutes } from "../../../../shared/configs/routeConfig/routeConfig";
import { NotFoundPage } from "../../../../pages/NotFounPage/index";

const AboutPageLazy = React.lazy(() => import('../../../../pages/AboutPage').then(module => ({ default: module.AboutPage })));
const MainPageLazy = React.lazy(() => import('../../../../pages/MainPage').then(module => ({ default: module.MainPage })));


export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: PathRoutes.main,
        element: <MainPageLazy />
    },
    [AppRoutes.ABOUT]: {
        path: PathRoutes.about,
        element: <AboutPageLazy />
    },
    [AppRoutes.NOT_FOUND]: {
        path: PathRoutes.not_found,
        element: <NotFoundPage />
    }
}