export enum AppRoutes{
    MAIN= 'main',
    ABOUT= 'about',
    NOT_FOUND = 'not_found',
    PROFILE = 'profile'

}

export const PathRoutes:Record<AppRoutes, string>={
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.NOT_FOUND]:'*',
    [AppRoutes.PROFILE]: '/profile'
}
