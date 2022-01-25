import { Request, Response } from 'express'
import { LogoutUserService } from '../../services/login/LogoutUserService'
import { FirebaseErrorProvider } from '../../utils/FirebaseErrorProvider'

class LogoutUserController {
  async handle(request: Request, response: Response) {
    const service = new LogoutUserService()
    try {
      await service.execute()
    } catch (error) {
      FirebaseErrorProvider(
        response,
        error,
        'Não foi possivel deslogar o usuário!'
      )
    }
  }
}
export { LogoutUserController }
