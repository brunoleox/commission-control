import { Request, Response } from 'express'
import { ListClientsService } from '../../services/clients/ListClientsService'

class ListClientsController {
  async handle(request: Request, response: Response) {
    const service = new ListClientsService()
    const result = await service.execute()
    return response.json(result)
  }
}

export { ListClientsController }
