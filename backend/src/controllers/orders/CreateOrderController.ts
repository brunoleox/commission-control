import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { IProducts } from '../../interfaces'
import { CreateOrderService } from '../../services/orders/CreateOrdersService'

type RequestOrder = {
  cnpj_cpf: string
  products: IProducts[]
  name: IProducts
}

class CreateOrderController {
  async handle(request: Request<{}, {}, RequestOrder>, response: Response) {
    const { products, cnpj_cpf, name } = request.body

    const service = new CreateOrderService()
    try {
      const result = await service.execute(products, cnpj_cpf, name)
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
        .json({ message: 'Algo deu errado ao criar a ordem.' })
    }
  }
}

export { CreateOrderController }
