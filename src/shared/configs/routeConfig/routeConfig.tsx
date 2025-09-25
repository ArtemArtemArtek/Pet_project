export enum AppRoutes{
    MAIN= 'main',
    ABOUT= 'about',
    NOT_FOUND = 'not_found',
    PROFILE = 'profile',
    EDIT_PROFILE = 'edit'
}

export const PathRoutes:Record<AppRoutes, string>={
    [AppRoutes.NOT_FOUND]:'*',
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.EDIT_PROFILE]: '/edit'
}
