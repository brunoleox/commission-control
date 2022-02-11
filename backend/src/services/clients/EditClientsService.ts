import { AppError } from 'errors/AppError'
import { IClients } from 'interfaces'
import prismaCLient from 'prisma'
class EditClientsService {
  async execute({ ...client }: IClients) {
    const clientAlreadExists = await prismaCLient.client.findUnique({
      where: {
        cnpj_cpf: client.cnpj_cpf,
      },
    })
    if (!clientAlreadExists) {
      throw new AppError('Cliente inválido')
    }
    const editClient = await prismaCLient.client.update({
      where: {
        cnpj_cpf: client.cnpj_cpf,
      },
      data: {
        ...client,
      },
    })
    return editClient
  }
}

export { EditClientsService }
