import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { ListClientsService } from '../../services/clients/ListClientsService'

class ListClientsController {
  async handle(request: Request, response: Response) {
    const service = new ListClientsService()
    try {
      const result = await service.execute()
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
        .json({ message: 'Algo deu errado ao listar os clientes.' })
    }
  }
}

export { ListClientsController }
