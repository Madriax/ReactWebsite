import * as Router from 'koa-router';
import {getArticles, createArticle, getArticle, updateArticle} from "../Service/ArticleService";

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = await getArticles();
    await next();
});

router.get('/:id', async (ctx, next) => {
    ctx.body = await getArticle(ctx.params.id);
    await next();
});

router.put('/:id', async (ctx, next) => {
    ctx.body = await updateArticle(ctx.params.id, ctx.request.body);
    await next();
});

router.post('/', async (ctx, next) => {
    ctx.body = await createArticle(ctx.request.body);
    await next();
})

export default router;