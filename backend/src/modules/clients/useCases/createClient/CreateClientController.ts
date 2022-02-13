import { Request, Response } from 'express'
import { ICreateClientDTO } from 'modules/clients/dtos/ICreateClientDTO'
import { container } from 'tsyringe'
import { AppErrorProvider } from 'utils/AppErrorProvider'
import { CreateClientUseCase } from './CreateClientUseCase'

class CreateClientController {
  async handle(request: Request, response: Response) {
    const client = request.body as ICreateClientDTO
    const createClientUseCase = container.resolve(CreateClientUseCase)
    try {
      const clientCreated = await createClientUseCase.execute(client)
      return response.status(201).json(clientCreated)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao criar o cliente!', response, error)
    }
  }
}
export { CreateClientController }
