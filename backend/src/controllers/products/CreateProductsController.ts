import { Request, Response } from 'express'
import { IProducts } from '../../interfaces'
import { CreateProductService } from '../../services/products/CreateProductsService'
import { AppErrorProvider } from '../../utils/AppErrorProvider'

class CreateProductsController {
  async handle(request: Request, response: Response) {
    const { ...products }: IProducts = request.body

    const service = new CreateProductService()
    try {
      const result = await service.execute(products)
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao criar o produto!', response, error)
    }
  }
}

export { CreateProductsController }
