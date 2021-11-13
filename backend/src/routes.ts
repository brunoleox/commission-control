import { Router } from 'express'
import { ListClientsController } from './controllers/clients/ListClientsController'
const router = Router()

router.get('/clients', new ListClientsController().handle)

export { router }
