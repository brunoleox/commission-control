import { Router } from 'express'
import { ListClientsController } from './controllers/clients/ListClientsController'
import { CreateClientsController } from './controllers/clients/CreateClientsController'
import { EditClientsController } from './controllers/clients/EditClientsController'
const router = Router()

router.get('/clients', new ListClientsController().handle)
router.post('/clients', new CreateClientsController().handle)
router.put('/clients', new EditClientsController().handle)
router.delete('/clients', new EditClientsController().handle)

export { router }
