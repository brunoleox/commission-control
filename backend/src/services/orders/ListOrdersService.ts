import prismaCLient from '../../prisma'

class ListOrdersService {
  async execute() {
    const listOrders = await prismaCLient.order.findMany({
      include: {
        products: true,
      },
    })
    return listOrders
  }
}
export { ListOrdersService }
