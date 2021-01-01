import {ArticleValidation} from "../Validation/ArticleValidation";
import * as jf from 'joiful';
import {CustomError} from "../utils/CustomError";
import {getConnection} from "typeorm";
import {Article} from "../Entity/Article";

/**
 * Create an article
 * @param article
 */
async function createArticle(article: ArticleValidation) {
    const { error } = jf.validateAsClass(article, ArticleValidation);
    if (error) throw new CustomError(error.message, 400);

    const connection = getConnection();
    const articleRepository = connection.getRepository(Article)
    const savedArticle = await articleRepository.save(article);
    console.log(`New article created with id ${savedArticle.id}`);
    return { message: `New article created with id ${savedArticle.id}` };
}

async function getArticles() {
    return [
        {
            id: 1,
            name: 'El firstos articlos',
            description: 'TOtoTOto TOtoTOto TOtoTOto',
            content: 'Les amis toto Les amis toto Les amis toto Les amis toto Les amis toto Les amis toto Les amis toto Les amis toto Les amis toto Les amis toto'
        },
        {
            id: 2,
            name: 'El deuxiemos articlos del patatos',
            description: 'Tetetet Tetetet Tetetet Tetetet',
            content: 'El amigos hehe El amigos hehe El amigos hehe El amigos hehe El amigos hehe El amigos hehe El amigos hehe El amigos hehe El amigos hehe'
        }
    ];
}

export {createArticle, getArticles}