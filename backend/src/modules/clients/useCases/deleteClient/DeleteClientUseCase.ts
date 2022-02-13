import { inject, injectable } from 'tsyringe'
import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository'
import { AppError } from 'errors/AppError'

@injectable()
class DeleteClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute(cnpj_cpf: string) {
    const clientAlreadExists = await this.clientsRepository.findByDocument(
      cnpj_cpf
    )
    if (!clientAlreadExists) {
      throw new AppError('Cliente inválido')
    }
    await this.clientsRepository.delete(cnpj_cpf)
  }
}
export { DeleteClientUseCase }
