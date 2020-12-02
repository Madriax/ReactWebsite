import * as Router from 'koa-router';
import {getArticles} from "../Service/ArticleService";

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = await getArticles();
    await next();
});

export default router;