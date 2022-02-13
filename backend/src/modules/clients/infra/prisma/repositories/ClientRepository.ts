import { ICreateClientDTO } from 'modules/clients/dtos/ICreateClientDTO'
import { IEditClientDTO } from 'modules/clients/dtos/IEditClientDTO'
import { ClientModel } from 'modules/clients/entities/ClientModel'
import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository'
import prismaCLient from 'shared/infra/prisma'

class ClientRepository implements IClientsRepository {
  async create(data: ICreateClientDTO): Promise<ClientModel> {
    const client = await prismaCLient.client.create({
      data: {
        ...data,
      },
    })
    return client
  }
  async list(): Promise<ClientModel[]> {
    const listClients = await prismaCLient.client.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    return listClients
  }
  async findByDocument(document: string): Promise<ClientModel> {
    const client = await prismaCLient.client.findUnique({
      where: {
        cnpj_cpf: document,
      },
    })
    return client
  }
  async edit(data: IEditClientDTO, cnpj_cpf: string): Promise<ClientModel> {
    const editClient = await prismaCLient.client.update({
      where: {
        cnpj_cpf: cnpj_cpf,
      },
      data: {
        ...data,
      },
    })
    return editClient
  }
  async delete(cnpj_cpf: string): Promise<void> {
    await prismaCLient.client.delete({
      where: {
        cnpj_cpf,
      },
    })
  }
}

export { ClientRepository }
