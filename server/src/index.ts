import * as Koa from 'koa';
import MainController from './Controller/MainController';
import {KoaLogger} from './Middleware/KoaLogger';

const app = new Koa();

app.use(KoaLogger());
app.use(MainController.routes()).use(MainController.allowedMethods());

export {app};