import { Request, Response } from 'express'
import { EditClientsService } from '../../services/clients/EditClientsService'
import { Client } from '../../types/client'

interface IRequest {
  cnpj_cpf: string
}

class EditClientsController {
  async handle(request: Request, response: Response) {
    const { cnpj_cpf }: IRequest = request.body
    console.log(cnpj_cpf)

    const service = new EditClientsService()
    const result = await service.execute(cnpj_cpf)
    return response.json(result)
  }
}

export { EditClientsController }
