import {ArticleValidation} from "../Validation/ArticleValidation";
import * as jf from 'joiful';
import {CustomError} from "../utils/CustomError";
import {getConnection} from "typeorm";
import {Article} from "../Entity/Article";
import Logger from "../utils/Logger";

/**
 * Create an article
 * @param article
 */
export async function createArticle(article: ArticleValidation) {
    const { error } = jf.validateAsClass(article, ArticleValidation);
    if (error) throw new CustomError(error.message, 400);

    const connection = getConnection();
    const articleRepository = connection.getRepository(Article)
    const savedArticle = await articleRepository.save(article);
    Logger.info(`New article created with id ${savedArticle.id}`)
    return { message: `New article created with id ${savedArticle.id}` };
}

/**
 * Return all articles
 */
export async function getArticles() {
    const connection = getConnection();
    const articleRepository = connection.getRepository(Article)
    const articles = await articleRepository.find();
    return { articles }
}

/**
 * Return an article based on his id
 * @param id
 */
export async function getArticle(id: number) {
    const connection = getConnection();
    const articleRepository = connection.getRepository(Article)
    const articles = await articleRepository.findOneOrFail(id);
    return { articles }
}