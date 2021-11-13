import { Router } from 'express'
import { ListClientsController } from './controllers/clients/ListClientsController'
import { CreateClientsController } from './controllers/clients/CreateClientsController'
const router = Router()

router.get('/clients', new ListClientsController().handle)
router.post('/clients', new CreateClientsController().handle)

export { router }
