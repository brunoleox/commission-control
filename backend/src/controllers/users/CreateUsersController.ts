import { Request, Response } from 'express'
import { IUsers } from 'interfaces'
import { CreateUsersService } from 'services/users/CreateUsersService'
import { AppErrorProvider } from 'utils/AppErrorProvider'
class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { ...users }: IUsers = request.body
    const service = new CreateUsersService()
    try {
      const result = await service.execute(users)
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao criar o usuário!', response, error)
    }
  }
}

export { CreateUsersController }
