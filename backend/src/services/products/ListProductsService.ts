import prismaCLient from 'prisma'

class ListProductsService {
  async execute() {
    const listProduct = await prismaCLient.product.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    return listProduct
  }
}

export { ListProductsService }
