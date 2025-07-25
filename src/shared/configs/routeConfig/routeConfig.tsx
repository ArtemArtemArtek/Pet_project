export enum AppRoutes{
    MAIN= 'main',
    ABOUT= 'about',

}

export const PathRoutes:Record<AppRoutes, string>={
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about'
}
