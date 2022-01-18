import { IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'

class DeleteProductsService {
  async execute(code: number) {
    await prismaCLient.product.delete({
      where: {
        code,
      },
    })
  }
}

export { DeleteProductsService }
