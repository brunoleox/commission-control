import { Request, Response } from 'express'
import { DeleteProductsService } from '../../services/products/DeleteProductsService'

class DeleteProductsController {
  async handle(request: Request, response: Response) {
    const { id } = request.body
    console.log(id)

    const service = new DeleteProductsService()
    await service.execute(id)
    return response.status(204).send()
  }
}

export { DeleteProductsController }
