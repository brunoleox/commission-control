import prismaCLient from '../../prisma'

class EditClientsService {
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
    const clients = await prismaCLient.clients.update({
      where: {
        cnpj_cpf,
      },
      data: {
        name,
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

export { EditClientsService }
