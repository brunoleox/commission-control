import { Router } from 'express'
import { clientValidator } from './middlewares/validatorClient'
import { productValidator } from './middlewares/validatorProducts'

import { CreateUsersController } from './controllers/users/CreateUsersController'
import { LoginUserController } from './controllers/users/LoginUsersController'
// import { LogoutUserController } from './controllers/login/LogoutUserController'

import { CreateClientController } from 'modules/clients/useCases/createClient/CreateClientController'
import { EditClientController } from 'modules/clients/useCases/editClient/EditClientController'
import { DeleteClientController } from 'modules/clients/useCases/deleteClient/DeleteClientController'
import { ListClientController } from 'modules/clients/useCases/listClients/listClientsController'

import { CreateProductsController } from './controllers/products/CreateProductsController'
import { ListProductsController } from './controllers/products/ListProductsController'
import { EditProductsController } from './controllers/products/EditProductsController'
import { DeleteProductsController } from './controllers/products/DeleteProductsController'

import { CreateOrderController } from './controllers/orders/CreateOrderController'
import { ListOrdersController } from './controllers/orders/ListOrderController'
import { EditOrderController } from './controllers/orders/EditOrderController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

router.post('/users', new CreateUsersController().handle)
router.post('/login', new LoginUserController().handle)
// router.post('/logout', new LogoutUserController().handle)

router.get('/clients', new ListClientController().handle)
router.post(
  '/clients',
  ensureAuthenticated,
  clientValidator,
  new CreateClientController().handle
)
router.put('/clients', new EditClientController().handle)
router.delete('/clients', new DeleteClientController().handle)

router.get('/products', new ListProductsController().handle)
router.post(
  '/products',
  productValidator,
  new CreateProductsController().handle
)
router.put('/products', new EditProductsController().handle)
router.delete('/products', new DeleteProductsController().handle)

router.post('/orders', new CreateOrderController().handle)
router.get('/orders', new ListOrdersController().handle)
router.put('/orders', new EditOrderController().handle)

export { router }
