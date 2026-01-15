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

export const getNotFoundPath=()=>'*'
export const getMainPath=()=>'/'
export const getAboutPath=()=>'/about'
export const getProfilePath=(id: string|number)=>`/profile/${id}`
export const getEditPath=()=>'/edit'
export const getArticlesPath=()=>'/articles'
export const getArticleDetailPagePath=(id: string|number)=>`/articles/${id}`
export const getAdminPagePath=()=>'/adminpanel'
