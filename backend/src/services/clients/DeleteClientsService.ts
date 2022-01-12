import prismaCLient from '../../prisma'
class DeleteClientsService {
  async execute(cnpj_cpf: string) {
    await prismaCLient.client.delete({
      where: {
        cnpj_cpf,
      },
    })
  }
}

export { DeleteClientsService }
