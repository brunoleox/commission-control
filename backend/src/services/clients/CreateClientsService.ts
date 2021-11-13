import prismaCLient from '../../prisma'

class CreateClientsService {
  async execute(
    name: string,
    cnpj_cpf: string,
    email: string,
    phone: string,
    address: string,
    number: string,
    district: string,
    city: string,
    state: string,
    cep: number
  ) {
    const clients = await prismaCLient.clients.create({
      data: {
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
      },
    })
    return clients
  }
}

export { CreateClientsService }
