import { Request, Response } from 'express'
import { IClients } from '../../interfaces'
import { EditClientsService } from '../../services/clients/EditClientsService'
class EditClientsController {
  async handle(request: Request, response: Response) {
    const { ...client }: IClients = request.body

    const service = new EditClientsService()
    const result = await service.execute(client)
    return response.json(result)
  }
}

export { EditClientsController }
