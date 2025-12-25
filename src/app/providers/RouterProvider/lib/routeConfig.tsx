import { RouteProps } from "react-router-dom"
import React from "react";
import { PathRoutes, AppRoutes } from "../../../../shared/configs/routeConfig/routeConfig";
import { NotFoundPage } from "../../../../pages/NotFounPage/index";
import { PrivateRouteWrapper } from "./PrivateRouteWrapper";
import { user } from "../../../../../src/entities/User";

const AboutPageLazy = React.lazy(() => import('../../../../pages/AboutPage').then(module => ({ default: module.AboutPage })));
const MainPageLazy = React.lazy(() => import('../../../../pages/MainPage').then(module => ({ default: module.MainPage })));
const ProfilePageLazy = React.lazy(() => import('../../../../pages/ProfilePage').then(module => ({ default: module.ProfilePage })));
const EditProfilePageLazy = React.lazy(() => import('../../../../pages/EditProfile').then(module => ({ default: module.EditProfilePage })));
const ArticleDetailPageLazy = React.lazy(() => import('../../../../pages/ArticleDetailPage').then(module => ({ default: module.ArticleDetailPage })))
const ArticlesPageLazy = React.lazy(() => import('../../../../pages/ArticlesPage').then(module => ({ default: module.ArticlesPage })))
const AdminPageLazy = React.lazy(()=>import('../../../../pages/AdminPage/AdminPage').then(module => ({ default: module.AdminPage })))

export const RouteConfigWrapper = () => {
    const userData: user = JSON.parse(localStorage.getItem('user')) || null

    const RouteConfig: Record<AppRoutes, RouteProps> = {
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
        },
        [AppRoutes.PROFILE]: {
            path: `${PathRoutes.profile}:userId`,
            element: (
                <PrivateRouteWrapper user={userData}>
                    <ProfilePageLazy />
                </PrivateRouteWrapper>
            )
        },
        [AppRoutes.EDIT_PROFILE]: {
            path: PathRoutes.edit,
            element: (
                <PrivateRouteWrapper user={userData}>
                    <EditProfilePageLazy />
                </PrivateRouteWrapper>
            )
        },
        [AppRoutes.ARTICLES_PAGE]: {
            path: PathRoutes.articles,
            element: (
                <PrivateRouteWrapper user={userData}>
                    <ArticlesPageLazy />
                </PrivateRouteWrapper>
            )
        },
        [AppRoutes.ARTICLE_DETAIL_PAGE]: {
            path: `${PathRoutes.article_detail}:id`,
            element: (
                <PrivateRouteWrapper user={userData}>
                    <ArticleDetailPageLazy />
                </PrivateRouteWrapper>
            )
        },
        [AppRoutes.ADMIN_PAGE]:{
            path: PathRoutes.admin_page,
            element: (
                <PrivateRouteWrapper user={userData}>
                    <AdminPageLazy />
                </PrivateRouteWrapper>
            )
        }
    }

    return RouteConfig
}