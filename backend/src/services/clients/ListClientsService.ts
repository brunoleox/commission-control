import prismaCLient from 'prisma'

class ListClientsService {
  async execute() {
    const listClients = await prismaCLient.client.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    return listClients
  }
}

export { ListClientsService }
