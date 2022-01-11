import { AppError } from '../../errors/AppError'
import { IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'
class CreateProductService {
  async execute({ ...products }: IProducts) {
    const createProduct = await prismaCLient.products.create({
      data: {
        ...products,
      },
    })
    return createProduct
  }
}

export { CreateProductService }
