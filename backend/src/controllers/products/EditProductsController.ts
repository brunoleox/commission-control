import { Request, Response } from 'express'
import { IProducts } from '../../interfaces'
import { EditProductsService } from '../../services/products/EditProdutsService'

class EditProductsController {
  async handle(request: Request, response: Response) {
    const { ...products }: IProducts = request.body
    const { id } = request.params

    const service = new EditProductsService()
    const result = await service.execute({ id, ...products })
    return response.json(result)
  }
}

export { EditProductsController }
