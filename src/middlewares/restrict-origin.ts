import type { Request, Response, NextFunction } from 'express'

export const restrictOrigin = (req: Request, res: Response, next: NextFunction) => {
	const allowedOrigin = process.env.FRONTEND_URL

	if (req.headers.origin !== allowedOrigin) {
		return res.status(403).json({
			message: 'Forbidden'
		})
	}

	next()
}
