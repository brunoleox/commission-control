import { AppError } from 'errors/AppError'
import { IUsers } from 'interfaces'
import prismaCLient from 'prisma'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IResponse {
  user: {
    email: string
  }
  token: string
}

class LoginUsersService {
  async execute({ email, password }: IUsers): Promise<IResponse> {
    const user = await prismaCLient.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) {
      throw new AppError('Email ou senha incorreto!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email ou senha incorreto!')
    }

    const token = sign({}, '2fbf858aea528e022a745cebee4978b1', {
      subject: user.id,
      expiresIn: '1d',
    })

    return {
      user: {
        email,
      },
      token,
    }
  }
}
export { LoginUsersService }
