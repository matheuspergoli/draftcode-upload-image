import { Router } from 'express'
import { imageRouter } from './image/imageRoute'
import { restrictOrigin } from '../middlewares/restrict-origin'

export const routes = Router()

routes.use('/image-upload', restrictOrigin, imageRouter)
