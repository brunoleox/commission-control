import { isValidCNPJ, isValidCPF } from '@brazilian-utils/brazilian-utils'
import { AppError } from '../../errors/AppError'
import prismaCLient from '../../prisma'
class CreateClientsService {
  async execute(
    name: string,
    cnpj_cpf: string,
    email: string,
    phone: string,
    address: string,
    number: string,
    district: string,
    city: string,
    state: string,
    cep: number
  ) {
    if (cnpj_cpf.length == 11 && !isValidCPF(cnpj_cpf)) {
      throw new AppError('CPF inválido')
    }
    if (cnpj_cpf.length == 14 && !isValidCNPJ(cnpj_cpf)) {
      throw new AppError('CNPJ inválido')
    }

    const clientAlreadExists = await prismaCLient.clients.findFirst({
      where: {
        cnpj_cpf,
      },
    })
    if (clientAlreadExists) {
      throw new AppError('CNPJ ou CPF já cadastrado.')
    }

    const createClient = await prismaCLient.clients.create({
      data: {
        name,
        cnpj_cpf,
        email,
        phone,
        address,
        number,
        district,
        city,
        state,
        cep,
      },
    })
    return createClient
  }
}

export { CreateClientsService }
