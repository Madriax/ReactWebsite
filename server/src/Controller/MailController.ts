import * as Router from 'koa-router';
import {sendMail} from "../Service/MailService";


const router = new Router();

router.post('/', async (ctx, next) => {
    ctx.body = await sendMail(ctx.request.body);
    await next();
});

export default router;