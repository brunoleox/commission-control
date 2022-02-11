import { AppError } from 'errors/AppError'
import prismaCLient from 'prisma'

class DeleteProductsService {
  async execute(code: number) {
    const productAlreadExists = await prismaCLient.product.findUnique({
      where: {
        code,
      },
    })
    if (!productAlreadExists) {
      throw new AppError('Produto não existe!', 404)
    }
    await prismaCLient.product.delete({
      where: {
        code,
      },
    })
  }
}

export { DeleteProductsService }
