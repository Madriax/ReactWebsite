import * as Router from 'koa-router';
import BlogController from './BlogController';
import MailController from './MailController';
import {IsUser} from "../Middleware/IsUser";

const router = new Router();

router.get('/', async (ctx, next) => {
   ctx.body = 'Salut à tous les amis';
   await next();
});

router.use('/blog', IsUser(), BlogController.routes(), BlogController.allowedMethods());

router.use('/mail', MailController.routes(), MailController.allowedMethods());

export default router;