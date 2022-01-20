import { Request, Response } from 'express'
import { IUser } from '../../interfaces'
import { LoginUserService } from '../../services/login/LoginUserService'
import { FirebaseErrorProvider } from '../../utils/FirebaseErrorProvider'

class LoginUserController {
  async handle(request: Request, response: Response) {
    const { id }: IUser = request.body

    const service = new LoginUserService()
    try {
      const result = await service.execute(id)
      return response.json(result.user)
    } catch (error) {
      FirebaseErrorProvider(response, error, 'Não foi possivel fazer login!')
    }
  }
}
export { LoginUserController }
