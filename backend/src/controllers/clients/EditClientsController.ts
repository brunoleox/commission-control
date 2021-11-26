import { Request, Response } from 'express'
import { EditClientsService } from '../../services/clients/EditClientsService'
interface IRequest {
  name: string
  cnpj_cpf: string
  email: string
  phone: string
  address: string
  number: string
  district: string
  city: string
  state: string
  cep: number
}

class EditClientsController {
  async handle(request: Request, response: Response) {
    const {
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
    }: IRequest = request.body

    const service = new EditClientsService()
    const result = await service.execute(
      name,
      cnpj_cpf,
      email,
      phone,
      address,
      number,
      district,
      city,
      state,
      cep
    )
    return response.json(result)
  }
}

export { EditClientsController }
