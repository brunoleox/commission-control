import { Request, Response } from 'express'
import { ListProductsService } from '../../services/products/ListProductsService'

class ListProductsController {
  async handle(request: Request, response: Response) {
    const service = new ListProductsService()
    const result = await service.execute()
    return response.json(result)
  }
}

export { ListProductsController }
