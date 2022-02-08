import { Request, Response } from 'express'
import { IClients } from '../../interfaces'
import { EditClientsService } from '../../services/clients/EditClientsService'
import { AppErrorProvider } from '../../utils/AppErrorProvider'
class EditClientsController {
  async handle(request: Request, response: Response) {
    const { ...client }: IClients = request.body
    const service = new EditClientsService()
    try {
      const result = await service.execute(client)
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao editar o cliente!', response, error)
    }
  }
}

export { EditClientsController }
