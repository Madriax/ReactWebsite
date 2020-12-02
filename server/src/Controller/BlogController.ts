import * as Router from 'koa-router';
import {getArticles} from "../Service/ArticleService";
import ArticleController from './ArticleController';

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'Bienvenito sur el blogos';
    await next();
});

router.use('/article', ArticleController.routes(), ArticleController.allowedMethods());

export default router;