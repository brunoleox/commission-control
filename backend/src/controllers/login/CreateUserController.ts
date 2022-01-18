import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { IUser } from '../../interfaces'
import { CreateUserService } from '../../services/login/CreateUserService'

class CreateUserClient {
  async handle(request: Request, response: Response) {
    const { ...user }: IUser = request.body

    const service = new CreateUserService()
    try {
      const result = await service.execute(user)
      return response.json(result)
    } catch (error) {
      console.error(error)
      if (error instanceof AppError) {
        return response
          .status(error.statusCode)
          .json({ message: error.message })
      }
      return response
        .status(500)
        .json({ message: 'Algo deu errado ao criar o usuário.' })
    }
  }
}

export { CreateUserClient }
