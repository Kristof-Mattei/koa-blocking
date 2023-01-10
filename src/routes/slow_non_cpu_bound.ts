import type { BaseContext } from "koa";

import { asyncPauseFor } from "../utils/asyncPauseFor";

export async function slow_non_cpu_bound(ctx: BaseContext): Promise<void> {
    const start = Date.now();
    const expectedEnd = start + 10000;

    await asyncPauseFor(10);

    // this is a heavy calculation
    const actualEnd: number = Date.now();

    const startedDate = new Date(start).toISOString();
    const expectedEndDate = new Date(expectedEnd).toISOString();
    const actualEndDate = new Date(actualEnd).toISOString();

    ctx.body = `Started at ${startedDate}; Expected to end at ${expectedEndDate}, actual end at ${actualEndDate}`;
}
