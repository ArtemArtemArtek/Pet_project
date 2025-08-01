export enum AppRoutes{
    MAIN= 'main',
    ABOUT= 'about',
    NOT_FOUND = 'not_found'

}

export const PathRoutes:Record<AppRoutes, string>={
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.NOT_FOUND]:'*'
}
