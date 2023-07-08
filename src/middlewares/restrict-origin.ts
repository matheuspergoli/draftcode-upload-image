import type { Request, Response, NextFunction } from 'express'

export const restrictOrigin = (req: Request, res: Response, next: NextFunction) => {
	const allowedOrigin = ['http://localhost:3000', 'https://draftcode.vercel.app']

	if (!allowedOrigin.includes(req.headers.origin || '')) {
		return res.status(403).json({
			message: 'You are not allowed to access this resource'
		})
	}

	next()
}
