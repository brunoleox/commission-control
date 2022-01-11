import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { IProducts } from '../../interfaces'
import { CreateProductService } from '../../services/products/CreateProductsService'

class CreateProductsController {
  async handle(request: Request, response: Response) {
    const { ...products }: IProducts = request.body

    const service = new CreateProductService()
    try {
      const result = await service.execute(products)
      return response.json(result)
    } catch (error) {
      console.error(error)
      if (error instanceof AppError) {
        return response
          .status(error.statusCode)
          .json({ message: error.message })
      }
      return response
        .status(500)
        .json({ message: 'Algo deu errado ao criar o produto.' })
    }
  }
}

export { CreateProductsController }
