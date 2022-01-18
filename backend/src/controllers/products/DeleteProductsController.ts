import { Request, Response } from 'express'
import { DeleteProductsService } from '../../services/products/DeleteProductsService'

class DeleteProductsController {
  async handle(request: Request, response: Response) {
    const { code } = request.body

    const service = new DeleteProductsService()
    await service.execute(code)
    return response.status(204).send()
  }
}

export { DeleteProductsController }
