import { ArticleDetailType } from '../types/articleTypes';
const defaultArticle = {
    id: '100000',
    title: 'TESTING ARTICLE',
    subtitle: 'БиологиЯ',
    img:
        'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd' +
        '7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: ArticleDetailType) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asasf' },
            body: article ?? defaultArticle,
        })
        .then((response) => response.body);
};

export const deleteArticle = (articleID: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleID}`,
        headers: { Authorization: 'Authorization' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(
                article?: ArticleDetailType,
            ): Chainable<ArticleDetailType>;
            deleteArticle(articleID: string): Chainable<void>;
        }
    }
}
