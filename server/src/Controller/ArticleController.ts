import * as Router from 'koa-router';
import {getArticles, createArticle, getArticle} from "../Service/ArticleService";

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = await getArticles();
    await next();
});

router.get('/:id', async (ctx, next) => {
    ctx.body = await getArticle(ctx.params.id);
    await next();
});

router.post('/create', async (ctx, next) => {
    ctx.body = await createArticle(ctx.request.body);
    await next();
})

export default router;