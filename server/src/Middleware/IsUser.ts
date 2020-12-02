import {Context, Next} from "koa";

export function IsUser() {
    const user = {id: 1234, username: 'toto'}
    return async (ctx: Context, next: Next) => {
        const name = ctx.request.query.name;

        if (name == user.username) {
            ctx.state.user = user;
            await next();
        } else {
            ctx.throw(401, { error: 'T\'as pas accès ' })
        }
    }
}