import { Request, Response } from 'express'
import { ListClientsService } from 'services/clients/ListClientsService'
import { AppErrorProvider } from 'utils/AppErrorProvider'

class ListClientsController {
  async handle(request: Request, response: Response) {
    const service = new ListClientsService()
    try {
      const result = await service.execute()
      return response.json(result)
    } catch (error) {
      AppErrorProvider(
        'Algo deu errado ao listar os clientes!',
        response,
        error
      )
    }
  }
}

export { ListClientsController }
