### Purpose
Investigate how to expose slow operations in Koa

### Instructions
1. `npm install`
1. `npm run watch-server`
1. This app exposes 4 endpoints: http://localhost:3000/ (1), http://localhost:3000/slow (2), http://localhost:3000/slow_non_cpu_bound (3), and http://localhost:3000/fast (4)
1. You'll notice that when you open (2)/(3) that (1) stalls until (2)/(3) responds. However this is not the case when launching (4). (1) immediately responds even though they essentially peform the same amount of work ([slow.ts](./src/routes/slow.ts), [fast.ts](./src/routes/fast.ts))
