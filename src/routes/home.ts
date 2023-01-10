import type { BaseContext } from "koa";

export function home(ctx: BaseContext): void {
    ctx.body = `It is currently ${new Date().toISOString()}.`;
}
