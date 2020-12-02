import {Context, Next} from "koa";

export function KoaLogger() {
    return async (ctx: Context, next: Next) => {
        console.log(`${ctx.request.ip} ${ctx.request.method} => ${ctx.request.originalUrl}`);
        try {
            await next();
        } catch (e) {
            console.log(`Error: ${e.message}`);
            ctx.body = { error: e.message }
            ctx.status = 500;
        }
    }
}