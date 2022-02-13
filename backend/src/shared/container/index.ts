import { ClientRepository } from 'modules/clients/infra/prisma/repositories/ClientRepository'
import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository'
import { container } from 'tsyringe'

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientRepository
)
