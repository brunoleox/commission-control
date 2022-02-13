import { inject, injectable } from 'tsyringe'
import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository'
import { IEditClientDTO } from 'modules/clients/dtos/IEditClientDTO'
import { AppError } from 'errors/AppError'

@injectable()
class EditClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute(data: IEditClientDTO) {
    const clientAlreadExists = await this.clientsRepository.findByDocument(
      data.cnpj_cpf
    )
    if (!clientAlreadExists) {
      throw new AppError('Cliente inválido')
    }
    const editClient = await this.clientsRepository.edit(data, data.cnpj_cpf)
    return editClient
  }
}
export { EditClientUseCase }
