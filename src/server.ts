import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import { routes } from './routes'

export const app = express()

app.use(
	cors({
		credentials: true,
		origin: process.env.FRONTEND_URL
	})
)
app.use(express.json())

// Routes
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
	console.log('Server is running on port 3333')
})
