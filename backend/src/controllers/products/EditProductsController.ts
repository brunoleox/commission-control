import { Request, Response } from 'express'
import { IProducts } from '../../interfaces'
import { EditProductsService } from '../../services/products/EditProductsService'
import { AppErrorProvider } from '../../utils/AppErrorProvider'

class EditProductsController {
  async handle(request: Request, response: Response) {
    try {
      const { ...products }: IProducts = request.body

      const service = new EditProductsService()
      const result = await service.execute({ ...products })
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao editar o produto!', response, error)
    }
  }
}

export { EditProductsController }
