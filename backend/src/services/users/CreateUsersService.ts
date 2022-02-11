import { AppError } from 'errors/AppError'
import { IUsers } from 'interfaces'
import prismaCLient from 'prisma'
import { hash } from 'bcrypt'
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

    const passwordHash = await hash(users.password, 8)

    const createUser = await prismaCLient.user.create({
      data: {
        ...users,
        password: passwordHash,
      },
    })
    return createUser
  }
}

export { CreateUsersService }
