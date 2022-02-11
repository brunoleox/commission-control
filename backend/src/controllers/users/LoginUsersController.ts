import { Request, Response } from 'express'
import { IUsers } from 'interfaces'
import { AppErrorProvider } from 'utils/AppErrorProvider'
import { LoginUsersService } from 'services/users/LoginUsersService'

class LoginUserController {
  async handle(request: Request, response: Response) {
    const { ...user }: IUsers = request.body
    const service = new LoginUsersService()
    try {
      const result = await service.execute(user)
      return response.json(result)
    } catch (error) {
      AppErrorProvider('Algo deu errado ao fazer o login', response, error)
    }
  }
}
export { LoginUserController }
