import type { Request, Response } from 'express'
import { uploadToCloudinary, deleteFromCloudinary } from '../../config/cloudinary'

export class ImageRouterController {
	create = async (req: Request, res: Response) => {
		try {
			const file = req.file as Express.Multer.File

			const { url, public_id } = await uploadToCloudinary(file.path, 'draft-images')

			return res.status(200).json({ message: `Imagem com ID: ${public_id} criada com sucesso`, url, public_id })
		} catch (error) {
			return res.status(400).json({ message: 'Erro ao criar imagem', error })
		}
	}

	delete = async (req: Request, res: Response) => {
		try {
			const { public_id } = req.body

			await deleteFromCloudinary(public_id)

			return res.status(200).json({ message: `Imagem com ID: ${public_id} deletada com sucesso` })
		} catch (error) {
			return res.status(400).json({ message: 'Erro ao deletar imagem', error })
		}
	}
}
