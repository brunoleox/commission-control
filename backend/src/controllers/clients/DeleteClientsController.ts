import { Request, Response } from 'express'
import { DeleteClientsService } from '../../services/clients/DeleteClientsService'

interface IRequest {
  cnpj_cpf: string
}

class DeleteClientsController {
  async handle(request: Request, response: Response) {
    const { cnpj_cpf } = request.body

    const service = new DeleteClientsService()
    const result = await service.execute(cnpj_cpf)
    return response.json(result)
  }
}

export { DeleteClientsController }
