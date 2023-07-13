import { Router } from 'express'
import { upload } from '../../config/multer'
import { ImageController } from '../../controllers'

export const imageRouter = Router()

imageRouter.delete('/delete', ImageController.delete)
imageRouter.post('/', upload.single('image'), ImageController.create)
