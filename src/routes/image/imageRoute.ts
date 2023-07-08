import { Router } from 'express'
import { ImageController } from '../../controllers'

export const imageRouter = Router()

imageRouter.post('/', ImageController.create)
