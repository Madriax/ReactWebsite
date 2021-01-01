import {Context, Next} from "koa";
import Logger from "../utils/Logger";

export function KoaLogger() {
    return async (ctx: Context, next: Next) => {
        Logger.info('request', { ip: ctx.request.ip, method: ctx.request.method, url: ctx.request.originalUrl })
        try {
            await next();
        } catch (e) {
            Logger.error(e.message)
            ctx.body = { error: e.message }
            ctx.status = e.status || 500;
        }
    }
}