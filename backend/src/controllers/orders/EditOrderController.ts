import { Request, Response } from 'express'
import { IClients, IOrders, IProducts } from '../../interfaces'
import { EditOrdersService } from '../../services/orders/EditOrderService'
import { AppErrorProvider } from '../../utils/AppErrorProvider'

type OrderType = {
  name: string
  products: IProducts
  order: number
}

class EditOrderController {
  async handle(request: Request<{}, {}, OrderType>, response: Response) {
    try {
      const { name, products, order } = request.body
      const service = new EditOrdersService()
      const result = await service.execute(name, products, order)
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao editar o produto!', response, error)
    }
  }
}

export { EditOrderController }
