import { Request, Response } from 'express'
import { DeleteClientsService } from '../../services/clients/DeleteClientsService'

interface IRequest {
  cnpj_cpf: string
}
class DeleteClientsController {
  async handle(request: Request, response: Response) {
    const { cnpj_cpf }: IRequest = request.body
    console.log(request.body)

    const service = new DeleteClientsService()
    await service.execute(cnpj_cpf)
    return response.status(204).send()
  }
}

export { DeleteClientsController }
