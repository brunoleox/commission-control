import { Router } from 'express'
import { ListClientsController } from './controllers/clients/ListClientsController'
import { CreateClientsController } from './controllers/clients/CreateClientsController'
import { EditClientsController } from './controllers/clients/EditClientsController'
import { DeleteClientsController } from './controllers/clients/DeleteClientsController'
import { clientValidator } from './middlewares/validatorClient'
const router = Router()

router.get('/clients', new ListClientsController().handle)
router.post('/clients', clientValidator, new CreateClientsController().handle)
router.put('/clients', new EditClientsController().handle)
router.delete('/clients', new DeleteClientsController().handle)

export { router }
