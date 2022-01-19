import { Request, Response } from 'express'
import { FirebaseError } from 'firebase/app'
import { IUser } from '../../interfaces'
import { CreateUserService } from '../../services/login/CreateUserService'
import { AppErrorProvider } from '../../utils/AppErrorProvider'
import { FirebaseErrorProvider } from '../../utils/FirebaseErrorProvider'

class CreateUserClient {
  async handle(request: Request, response: Response) {
    const { ...user }: IUser = request.body

    const service = new CreateUserService()
    try {
      const result = await service.execute(user)
      return response.json(result.user)
    } catch (error) {
      FirebaseErrorProvider(
        response,
        error,
        'Não foi possivel criar o usuário!'
      )
    }
  }
}
export { CreateUserClient }
