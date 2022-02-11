import { AppError } from '../errors/AppError'

interface IResponse {
  status: (code: number) => IResponse
  json: (body?: any) => IResponse
}

const AppErrorProvider = (
  message: string,
  response?: IResponse,
  error?: Error,
  code?: number
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
      code: error.statusCode,
    })
  }
  return response.status(code || 500).json({
    status: 'error',
    message,
  })
}

export { AppErrorProvider }
