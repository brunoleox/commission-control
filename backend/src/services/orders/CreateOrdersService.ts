import { AppError } from 'errors/AppError'
import { IProducts } from 'interfaces'
import prismaCLient from 'prisma'

class CreateOrderService {
  async execute(products: IProducts[], cnpj_cpf: string, name: string) {
    const clientAlreadExists = await prismaCLient.client.findFirst({
      where: {
        cnpj_cpf,
      },
    })
    if (!clientAlreadExists) {
      throw new AppError('Cliente não cadastrado')
    }

    const createProductsList = products.map((product) => {
      return {
        productId: product.id,
      }
    })

    const createOrder = await prismaCLient.order.create({
      data: {
        clientId: clientAlreadExists.id,
        products: { create: createProductsList },
        name,
      },
    })
    return createOrder
  }
}

export { CreateOrderService }
