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
import { nanoid } from 'nanoid' // For generating unique tokens
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

app.post('/register', async (c) => {
	const { DB } = c.env;
	const { username, email, password } = await c.req.json();

	if (!DB) {
		return c.text('Database not configured', 500);
	}

	if (!username || !email || !password) {
		return c.text('All fields (username, email, password) are required', 400);
	}

	try {
		// Check if username or email already exists
		const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
		const existingUser = await DB.prepare(checkQuery).bind(username, email).first();

		if (existingUser) {
			return c.text('Username or email already taken', 400);
		}

		// Insert new user
		const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
		await DB.prepare(insertQuery).bind(username, email, password).run();

		return c.text('Account created successfully', 201);
	} catch (error) {
		return c.text(error.message, 500);
	}
});

app.post('/login', async (c) => {
	const { DB } = c.env;

    const body = await c.req.json(); // Get request body
	const { username, password } = body;

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
  
  app.post('/reset-password', async (c) => {
	const { DB } = c.env // Cloudflare D1 database
	const { email } = await c.req.json()
  
	if (!DB) return c.text('Database not configured', 500)
	if (!email || !email.includes('@')) return c.text('Invalid email', 400)
  
	try {
	  // Check if user exists
	  const userQuery = 'SELECT * FROM users WHERE email = ?'
	  const user = await DB.prepare(userQuery).bind(email).first()
  
	  if (!user) return c.text('No account found with this email', 404)
  
	  // Generate a secure reset token
	  const resetToken = nanoid(32) // Generates a random string
	  const expiration = Math.floor(Date.now() / 1000) + 3600 // 1-hour expiration
  
	  // Store the reset token in the database
	  const insertTokenQuery = `
		INSERT INTO password_resets (email, token, expires_at)
		VALUES (?, ?, ?)
		ON CONFLICT(email) DO UPDATE SET token = excluded.token, expires_at = excluded.expires_at
	  `
	  await DB.prepare(insertTokenQuery).bind(email, resetToken, expiration).run()
  
	  // Send reset email (placeholder for email service)
	  console.log(`Password reset link: https://yourapp.com/reset-password?token=${resetToken}`)
  
	  return c.text('Password reset link sent to your email')
	} catch (error) {
	  return c.text(`Error: ${error.message}`, 500)
	}
  })

  app.post('/confirm-reset', async (c) => {
	const { DB } = c.env
	const { token, newPassword } = await c.req.json()
  
	if (!DB) return c.text('Database not configured', 500)
	if (!token || !newPassword) return c.text('Token and new password required', 400)
  
	try {
	  // Check if token is valid and not expired
	  const query = 'SELECT email FROM password_resets WHERE token = ? AND expires_at > ?'
	  const result = await DB.prepare(query).bind(token, Math.floor(Date.now() / 1000)).first()
  
	  if (!result) return c.text('Invalid or expired token', 400)
  
	  const { email } = result
  
	  // Update the user’s password (store securely in production!)
	  const updateQuery = 'UPDATE users SET password = ? WHERE email = ?'
	  await DB.prepare(updateQuery).bind(newPassword, email).run()
  
	  // Remove the used reset token
	  const deleteQuery = 'DELETE FROM password_resets WHERE email = ?'
	  await DB.prepare(deleteQuery).bind(email).run()
  
	  return c.text('Password reset successfully')
	} catch (error) {
	  return c.text(`Error: ${error.message}`, 500)
	}
  })

export default app