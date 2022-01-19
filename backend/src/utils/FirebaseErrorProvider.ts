import { FirebaseError } from 'firebase/app'

interface IResponse {
  status: (code: number) => IResponse
  json: (body?: any) => IResponse
}

const FirebaseErrorProvider = (
  response: IResponse,
  error: Error,
  message?: string
) => {
  if (error instanceof FirebaseError) {
    return response.status(400).json({
      message: message || error.message,
      code: error.code,
    })
  }
  return response.status(500).json({
    status: 'error',
    message,
  })
}

export { FirebaseErrorProvider }
