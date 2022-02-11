import { Request, Response } from 'express'
import { ListProductsService } from 'services/products/ListProductsService'
import { AppErrorProvider } from 'utils/AppErrorProvider'

class ListProductsController {
  async handle(request: Request, response: Response) {
    const service = new ListProductsService()
    try {
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

export { ListProductsController }
