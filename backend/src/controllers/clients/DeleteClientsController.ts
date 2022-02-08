import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { DeleteClientsService } from '../../services/clients/DeleteClientsService'
class DeleteClientsController {
  async handle(request: Request, response: Response) {
    const { cnpj_cpf } = request.body
    console.log(request.body)
    const service = new DeleteClientsService()
    try {
      await service.execute(cnpj_cpf)
      return response.status(204).send()
    } catch (error) {
      console.error(error)
      if (error instanceof AppError) {
        return response
          .status(error.statusCode)
          .json({ message: error.message })
      }
      return response
        .status(500)
        .json({ message: 'Algo deu errado ao deletar o cliente.' })
    }
  }
}
export { DeleteClientsController }
