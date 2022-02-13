import { Request, Response } from 'express'
import { IDeleteClientDTO } from 'modules/clients/dtos/IDeleteClientDTO'
import { container } from 'tsyringe'
import { AppErrorProvider } from 'utils/AppErrorProvider'
import { DeleteClientUseCase } from './DeleteClientUseCase'

class DeleteClientController {
  async handle(request: Request, response: Response) {
    const { cnpj_cpf } = request.body as IDeleteClientDTO
    const deleteClientUseCase = container.resolve(DeleteClientUseCase)
    try {
      await deleteClientUseCase.execute(cnpj_cpf)
      return response.status(204).send()
    } catch (error) {
      AppErrorProvider('Algo deu errado ao deletar o cliente!', response, error)
    }
  }
}
export { DeleteClientController }
