import { Request, Response } from 'express'
import { ListOrdersService } from 'services/orders/ListOrdersService'
import { AppErrorProvider } from 'utils/AppErrorProvider'

class ListOrdersController {
  async handle(request: Request, response: Response) {
    try {
      const service = new ListOrdersService()
      const result = await service.execute()
      return response.json(result)
    } catch (error) {
      AppErrorProvider(
        'Algo deu errado ao listar os produtos!',
        response,
        error
      )
    }
  }
}

export { ListOrdersController }
