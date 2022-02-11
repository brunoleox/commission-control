import { Request, Response } from 'express'
import { IClients } from 'interfaces'
import { CreateClientsService } from 'services/clients/CreateClientsService'
import { AppErrorProvider } from 'utils/AppErrorProvider'
class CreateClientsController {
  async handle(request: Request, response: Response) {
    const { ...client }: IClients = request.body
    const service = new CreateClientsService()
    try {
      const result = await service.execute(client)
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao criar o cliente!', response, error)
      console.log(error)
    }
  }
}

export { CreateClientsController }
