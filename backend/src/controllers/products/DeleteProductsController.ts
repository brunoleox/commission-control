import { Request, Response } from 'express'
import { DeleteProductsService } from '../../services/products/DeleteProductsService'
import { AppErrorProvider } from '../../utils/AppErrorProvider'

class DeleteProductsController {
  async handle(request: Request, response: Response) {
    const { code } = request.body
    const service = new DeleteProductsService()
    try {
      await service.execute(code)
      return response.status(204).send()
    } catch (error) {
      AppErrorProvider('Algo deu errado ao deletar o produto!', response, error)
    }
  }
}

export { DeleteProductsController }
