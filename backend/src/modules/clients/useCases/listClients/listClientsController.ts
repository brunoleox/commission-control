import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AppErrorProvider } from 'utils/AppErrorProvider'
import { ListClientUseCase } from './listClientsUseCase'

class ListClientController {
  async handle(request: Request, response: Response) {
    const listClientsUseCase = container.resolve(ListClientUseCase)
    try {
      const result = await listClientsUseCase.execute()
      return response.status(200).json(result)
    } catch (error) {
      AppErrorProvider(
        'Algo deu errado ao listar os clientes!',
        response,
        error
      )
    }
  }
}
export { ListClientController }
