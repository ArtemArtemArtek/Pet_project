export enum ArticleType {
    CODE = 'CODE',
    IT = 'IT',
    MANAGMENT = 'MANAGMENT'
}

export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}

interface ArticleBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleImage extends ArticleBase {
    src: string;
    title: string
}

export interface ArticleCode extends ArticleBase {
    code: string
}

export interface ArticleText extends ArticleBase {
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleImage | ArticleCode | ArticleText

export interface ArticleDetailType {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}