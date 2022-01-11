import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { IClients } from '../../interfaces'
import { CreateClientsService } from '../../services/clients/CreateClientsService'
class CreateClientsController {
  async handle(request: Request, response: Response) {
    const { ...client }: IClients = request.body

    const service = new CreateClientsService()
    try {
      const result = await service.execute(client)
      return response.json(result)
    } catch (error) {
      console.error(error)
      if (error instanceof AppError) {
        return response
          .status(error.statusCode)
          .json({ message: error.message })
      }
      return response
        .status(500)
        .json({ message: 'Algo deu errado ao criar o cliente.' })
    }
  }
}

export { CreateClientsController }
