import { AppError } from '../../errors/AppError'
import { IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'

class CreateOrderService {
  async execute(products: IProducts[], cnpj_cpf: string) {
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
      console.log(product)
    })
    console.log(createProductsList)

    const createOrder = await prismaCLient.order.create({
      data: {
        clientId: clientAlreadExists.id,
        products: { create: createProductsList },
      },
    })
    return createOrder
  }
}

export { CreateOrderService }
