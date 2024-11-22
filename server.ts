import { createServer } from 'vite';

import { Hono } from 'hono';

await createServer();

const app = new Hono();

Bun.serve({ port: 3000, fetch: app.fetch });
