import "reflect-metadata";
import * as Koa from 'koa';
import MainController from './Controller/MainController';
import {KoaLogger} from './Middleware/KoaLogger';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';

const app = new Koa();

app.use(KoaLogger());
app.use(cors());
app.use(bodyParser());
app.use(MainController.routes()).use(MainController.allowedMethods());

export {app};