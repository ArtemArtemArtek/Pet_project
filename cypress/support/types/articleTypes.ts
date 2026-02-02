import { user } from "./profileTypes";

enum ArticleSortFields{
    VIEWS = 'views',
    CREATED_AT = 'createdAt',
    TITLE = 'title'
}

enum ArticleType {
    CODE = 'CODE',
    IT = 'IT',
    MANAGMENT = 'MANAGMENT'
}

enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}

interface ArticleBase {
    id: string,
    type: ArticleBlockType
}

interface ArticleImage extends ArticleBase {
    src: string;
    title: string
}

interface ArticleCode extends ArticleBase {
    code: string
}

interface ArticleText extends ArticleBase {
    paragraphs: string[];
    title?: string;
}

type ArticleBlock = ArticleImage | ArticleCode | ArticleText

export interface ArticleDetailType {
    id: string;
    title: string;
    user:user
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}