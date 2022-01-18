import { AppError } from '../../errors/AppError'
import { IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'

class EditProductsService {
  async execute({ ...products }: IProducts) {
    const productAlreadExists = await prismaCLient.product.findUnique({
      where: {
        code: +products.code,
      },
    })
    if (!productAlreadExists) {
      throw new AppError('Produto não existe')
    } else {
      const EditProducts = await prismaCLient.product.update({
        where: {
          code: +products.code,
        },
        data: {
          name: products.name,
          value: products.value,
        },
      })
      return EditProducts
    }
  }
}

export { EditProductsService }
