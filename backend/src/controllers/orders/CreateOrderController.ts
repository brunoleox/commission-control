import { Request, Response } from 'express'
import { IProducts } from 'interfaces'
import { CreateOrderService } from 'services/orders/CreateOrdersService'
import { AppErrorProvider } from 'utils/AppErrorProvider'

type RequestOrder = {
  cnpj_cpf: string
  products: IProducts[]
  name: string
}

class CreateOrderController {
  async handle(request: Request<{}, {}, RequestOrder>, response: Response) {
    const { products, cnpj_cpf, name } = request.body

    const service = new CreateOrderService()
    try {
      const result = await service.execute(products, cnpj_cpf, name)
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao criar um pedido', response, error)
    }
  }
}

export { CreateOrderController }
