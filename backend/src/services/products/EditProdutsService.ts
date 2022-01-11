import { IProducts } from '../../interfaces'
import prismaCLient from '../../prisma'

class EditProductsService {
  async execute({ ...products }: IProducts) {
    console.log(products)
    const editProducts = await prismaCLient.products.update({
      where: {
        id: products.id,
      },
      data: {
        ...products,
      },
    })
    return editProducts
  }
}

export { EditProductsService }
