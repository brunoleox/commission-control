import prismaCLient from '../../prisma'

class DeleteClientsService {
  async execute(cnpj_cpf: string) {
    const result = await prismaCLient.clients.delete({
      where: {
        cnpj_cpf: cnpj_cpf,
      },
    })
    return result
  }
}

export { DeleteClientsService }
