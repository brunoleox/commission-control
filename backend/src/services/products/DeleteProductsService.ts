import { IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'

class DeleteProductsService {
  async execute(id) {
    await prismaCLient.products.delete({
      where: {
        id,
      },
    })
  }
}

export { DeleteProductsService }
