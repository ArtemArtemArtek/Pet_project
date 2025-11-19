export enum AppRoutes{
    MAIN= 'main',
    ABOUT= 'about',
    NOT_FOUND = 'not_found',
    PROFILE = 'profile',
    EDIT_PROFILE = 'edit',
    ARTICLES_PAGE = 'articles',
    ARTICLE_DETAIL_PAGE='article_detail',
    ADMIN_PAGE = 'admin_page'
}

export const PathRoutes:Record<AppRoutes, string>={
    [AppRoutes.NOT_FOUND]:'*',
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.EDIT_PROFILE]: '/edit',
    [AppRoutes.ARTICLES_PAGE]: '/articles',
    [AppRoutes.ARTICLE_DETAIL_PAGE]: '/articles/',
    [AppRoutes.ADMIN_PAGE]: '/adminpanel'
}
