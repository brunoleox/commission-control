import { isValidCNPJ, isValidCPF } from '@brazilian-utils/brazilian-utils'
import { AppError } from 'errors/AppError'
import { ICreateClientDTO } from 'modules/clients/dtos/ICreateClientDTO'
import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository'
import { injectable, inject } from 'tsyringe'

@injectable()
class CreateClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute(data: ICreateClientDTO) {
    if (data.cnpj_cpf.length <= 11 && !isValidCPF(data.cnpj_cpf)) {
      throw new AppError('CPF inválido')
    }
    if (
      data.cnpj_cpf.length > 11 &&
      data.cnpj_cpf.length <= 14 &&
      !isValidCNPJ(data.cnpj_cpf)
    ) {
      throw new AppError('CNPJ inválido')
    }

    const clientAlreadExists = await this.clientsRepository.findByDocument(
      data.cnpj_cpf
    )
    if (clientAlreadExists) {
      throw new AppError('CNPJ ou CPF já cadastrado.')
    }

    const createClient = await this.clientsRepository.create(data)
    return createClient
  }
}

export { CreateClientUseCase }
