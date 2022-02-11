import { Request, Response } from 'express'
import { DeleteClientsService } from 'services/clients/DeleteClientsService'
import { AppErrorProvider } from 'utils/AppErrorProvider'
class DeleteClientsController {
  async handle(request: Request, response: Response) {
    const { cnpj_cpf } = request.body
    console.log(request.body)
    const service = new DeleteClientsService()
    try {
      await service.execute(cnpj_cpf)
      return response.status(204).send()
    } catch (error) {
      AppErrorProvider('Algo deu errado ao deletar o cliente!', response, error)
    }
  }
}
export { DeleteClientsController }
