import prismaCLient from '../../prisma'
class DeleteClientsService {
  async execute(cnpj_cpf: string) {
    await prismaCLient.clients.delete({
      where: {
        cnpj_cpf,
      },
    })
  }
}

export { DeleteClientsService }
