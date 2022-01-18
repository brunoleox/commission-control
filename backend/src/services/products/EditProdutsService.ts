import { AppError } from '../../errors/AppError'
import { IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'

class EditProductsService {
  async execute({ ...products }: IProducts) {
    await prismaCLient.product.updateMany({
      where: {
        code: products.code,
      },
      data: {
        name: products.name,
        value: products.value,
      },
    })
  }
}
export { EditProductsService }
