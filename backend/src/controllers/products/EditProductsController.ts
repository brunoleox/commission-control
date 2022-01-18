import { Request, Response } from 'express'
import { IProducts } from '../../interfaces'
import { EditProductsService } from '../../services/products/EditProdutsService'

class EditProductsController {
  async handle(request: Request, response: Response) {
    const { ...products }: IProducts = request.body

    const service = new EditProductsService()
    const result = await service.execute({ ...products })
    return response.json(result)
  }
}

export { EditProductsController }
