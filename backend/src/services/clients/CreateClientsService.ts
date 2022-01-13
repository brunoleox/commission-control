import { isValidCNPJ, isValidCPF } from '@brazilian-utils/brazilian-utils'
import { AppError } from '../../errors/AppError'
import { IClients } from '../../interfaces'
import prismaCLient from '../../prisma'
class CreateClientsService {
  async execute({ ...client }: IClients) {
    if (client.cnpj_cpf.length <= 11 && !isValidCPF(client.cnpj_cpf)) {
      throw new AppError('CPF inválido')
    }
    if (client.cnpj_cpf.length == 14 && !isValidCNPJ(client.cnpj_cpf)) {
      throw new AppError('CNPJ inválido')
    }

    const clientAlreadExists = await prismaCLient.client.findFirst({
      where: {
        cnpj_cpf: client.cnpj_cpf,
      },
    })
    if (clientAlreadExists) {
      throw new AppError('CNPJ ou CPF já cadastrado.')
    }

    const createClient = await prismaCLient.client.create({
      data: {
        ...client,
      },
    })
    return createClient
  }
}

export { CreateClientsService }
