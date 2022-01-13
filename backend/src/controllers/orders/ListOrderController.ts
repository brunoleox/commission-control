import { Request, Response } from 'express'
import { ListOrdersService } from '../../services/orders/ListOrdersService'

class ListOrdersController {
  async handle(request: Request, response: Response) {
    const service = new ListOrdersService()
    const result = await service.execute()
    return response.json(result)
  }
}

export { ListOrdersController }
