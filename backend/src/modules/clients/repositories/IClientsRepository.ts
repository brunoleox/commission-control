import { ICreateClientDTO } from '../dtos/ICreateClientDTO'
import { IEditClientDTO } from '../dtos/IEditClientDTO'
import { ClientModel } from '../entities/ClientModel'

export interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<ClientModel>
  list(): Promise<ClientModel[]>
  findByDocument(document: string): Promise<ClientModel | undefined>
  edit(data: IEditClientDTO, cnpj_cpf: string): Promise<ClientModel>
  delete(cnpj_cpf: string): Promise<void>
}
