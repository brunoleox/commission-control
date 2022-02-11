import prismaCLient from 'prisma'

class ListOrdersService {
  async execute() {
    const listOrders = await prismaCLient.order.findMany({
      include: {
        Client: {
          select: {
            name: true,
            email: true,
            cnpj_cpf: true,
            phone: true,
          },
        },
        products: {
          select: {
            product: true,
          },
        },
      },
    })
    return listOrders
  }
}
export { ListOrdersService }
