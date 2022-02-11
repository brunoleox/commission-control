import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError'
import { AppErrorProvider } from '../utils/AppErrorProvider'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization
  console.log(authHeader)

  if (!authHeader) {
    AppErrorProvider('Token não encontado!', response, null, 401)
  }

  const [, token] = authHeader.split(' ')
  try {
    const { sub } = verify(
      token,
      '2fbf858aea528e022a745cebee4978b1'
    ) as IPayload
    console.log(sub)

    next()
  } catch (error) {
    AppErrorProvider('Token inválido!', response, null, 401)
  }
}
