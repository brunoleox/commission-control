import { Request, Response } from 'express'
import { CreateClientsService } from '../../services/clients/CreateClientsService'

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
class CreateClientsController {
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
    const service = new CreateClientsService()
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

export { CreateClientsController }
