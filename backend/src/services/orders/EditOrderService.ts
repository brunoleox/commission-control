import { IProducts } from 'interfaces'
import prismaCLient from 'prisma'

class EditOrdersService {
  async execute(name: string, products: IProducts, order: number) {
    console.log(order, name, products)

    await prismaCLient.$transaction([
      prismaCLient.product.updateMany({
        where: {
          id: products.id,
        },
        data: {
          name: products.name,
          value: products.value,
        },
      }),
    ])

    const editOrder = await prismaCLient.order.updateMany({
      where: {
        order,
      },
      data: {
        name,
      },
    })
    return editOrder
  }
}

export { EditOrdersService }
