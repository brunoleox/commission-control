import { Order } from '@prisma/client'
import { IOrders, IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'

type EditOrder = {
  number: IOrders
  name: IOrders
  products: IProducts
}

class EditOrdersService {
  async execute(name: string, number: number, products: IProducts) {
    const editOrder = await prismaCLient.order.update({
      where: {
        number: number,
      },
      data: {
        name,
      },
    })
    return editOrder
  }
}

export { EditOrdersService }
