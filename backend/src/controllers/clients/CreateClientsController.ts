import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { CreateClientsService } from '../../services/clients/CreateClientsService'

interface IRequest {
  name: string
  cnpj_cpf: string
  email: string
  phone: string
  address: string
  number: string
  district: string
  city: string
  state: string
  cep: number
}
class CreateClientsController {
  async handle(request: Request, response: Response) {
    const {
      name,
      cnpj_cpf,
      email,
      phone,
      address,
      number,
      district,
      city,
      state,
      cep,
    }: IRequest = request.body

    const service = new CreateClientsService()
    try {
      const result = await service.execute(
        name,
        cnpj_cpf,
        email,
        phone,
        address,
        number,
        district,
        city,
        state,
        cep
      )
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
        .json({ message: 'Algo deu errado ao criar o cliente.' })
    }
  }
}

export { CreateClientsController }
