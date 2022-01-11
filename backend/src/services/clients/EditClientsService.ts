import { IClients } from '../../interfaces'
import prismaCLient from '../../prisma'
class EditClientsService {
  async execute({ ...client }: IClients) {
    const editClient = await prismaCLient.clients.update({
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
