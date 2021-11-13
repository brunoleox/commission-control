import { Request, Response } from 'express'
import { CreateClientsService } from '../../services/clients/CreateClientsService'

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
    } = request.body

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
