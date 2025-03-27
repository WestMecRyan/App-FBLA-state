/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response('Hello World!');
// 	},
// };
import { Hono } from 'hono'
import { cors } from 'hono/cors'
const app = new Hono()
app.use('*', cors()) // Allow all origins

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))


app.get('/getUser', async (c) => {
	const { DB } = c.env;
	
	if (!DB) {
		return c.text('Database not configured', 500)
	}
  
	try {
		const result = await DB.prepare('SELECT * FROM users').all();
		return c.json(JSON.stringify(result));
	} catch (error) {
		return c.text(error.message, 500)
	}
});


app.post('/login', async (c) => {
	const { DB } = c.env;
	const username = c.req.query('username');
	const password = c.req.query('password');

	if (!DB) {
		return c.text('Database not configured', 500);
	}

	if (!username || !password) {
		return c.text('Username and password are required', 400);
	}

	try {
		const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
		const user = await DB.prepare(query).bind(username, password).first();

		if (!user) {
			return c.text('Invalid credentials', 401);
		}

		return c.text(`Login successful. Welcome ${user.username}`);
	} catch (error) {
		return c.text(error.message, 500);
	}
});

export default app