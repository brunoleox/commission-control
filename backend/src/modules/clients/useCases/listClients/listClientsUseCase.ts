import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class ListClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute() {
    const listClients = await this.clientsRepository.list()
    return listClients
  }
}
export { ListClientUseCase }
