import Router from "@koa/router";
import Koa from "koa";

import { fast } from "./routes/fast";
import { home } from "./routes/home";
import { slow } from "./routes/slow";
import { slow_non_cpu_bound } from "./routes/slow_non_cpu_bound";

const app = new Koa();

const router = new Router();

router.get("/", home);
router.get("/slow", slow);
router.get("/slow_non_cpu_bound", slow_non_cpu_bound);
router.get("/fast", fast);

app.use(router.routes());

app.listen(3000);
