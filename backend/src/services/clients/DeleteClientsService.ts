import { AppError } from 'errors/AppError'
import prismaCLient from 'prisma'
class DeleteClientsService {
  async execute(cnpj_cpf: string) {
    const clientAlreadExists = await prismaCLient.client.findUnique({
      where: {
        cnpj_cpf,
      },
    })
    if (!clientAlreadExists) {
      throw new AppError('Cliente inválido')
    }
    await prismaCLient.client.delete({
      where: {
        cnpj_cpf,
      },
    })
  }
}

export { DeleteClientsService }
