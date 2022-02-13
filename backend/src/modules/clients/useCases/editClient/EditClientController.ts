import { Request, Response } from 'express'
import { IEditClientDTO } from 'modules/clients/dtos/IEditClientDTO'
import { container } from 'tsyringe'
import { AppErrorProvider } from 'utils/AppErrorProvider'
import { EditClientUseCase } from './EditClientUseCase'

class EditClientController {
  async handle(request: Request, response: Response) {
    const client = request.body as IEditClientDTO
    const editClientUseCase = container.resolve(EditClientUseCase)
    try {
      const clientEdited = await editClientUseCase.execute(client)
      return response.status(201).json(clientEdited)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao editar o cliente!', response, error)
    }
  }
}
export { EditClientController }
