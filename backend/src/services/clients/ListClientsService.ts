import prismaCLient from '../../prisma'

class ListClientsService {
  async execute() {
    const clients = await prismaCLient.clients.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    return clients
  }
}

export { ListClientsService }
