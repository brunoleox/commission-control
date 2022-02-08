import { isValidCNPJ, isValidCPF } from '@brazilian-utils/brazilian-utils'
import { AppError } from '../../errors/AppError'
import { IUsers } from '../../interfaces'
import prismaCLient from '../../prisma'
class CreateUsersService {
  async execute({ ...users }: IUsers) {
    const userAlreadExists = await prismaCLient.user.findUnique({
      where: {
        email: users.email,
      },
    })
    if (userAlreadExists) {
      throw new AppError('O email informado já está em uso.')
    }
    const createUser = await prismaCLient.user.create({
      data: {
        ...users,
      },
    })
    return createUser
  }
}

export { CreateUsersService }
