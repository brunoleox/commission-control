import { Router } from 'express'
import { clientValidator } from './middlewares/validatorClient'
import { productValidator } from './middlewares/validatorProducts'

import { CreateUsersController } from './controllers/users/CreateUsersController'
// import { LoginUserController } from './controllers/login/LoginUserControler'
// import { LogoutUserController } from './controllers/login/LogoutUserController'

import { ListClientsController } from './controllers/clients/ListClientsController'
import { CreateClientsController } from './controllers/clients/CreateClientsController'
import { EditClientsController } from './controllers/clients/EditClientsController'
import { DeleteClientsController } from './controllers/clients/DeleteClientsController'

import { CreateProductsController } from './controllers/products/CreateProductsController'
import { ListProductsController } from './controllers/products/ListProductsController'
import { EditProductsController } from './controllers/products/EditProductsController'
import { DeleteProductsController } from './controllers/products/DeleteProductsController'

import { CreateOrderController } from './controllers/orders/CreateOrderController'
import { ListOrdersController } from './controllers/orders/ListOrderController'
import { EditOrderController } from './controllers/orders/EditOrderController'

const router = Router()

router.post('/users', new CreateUsersController().handle)
// router.post('/login', new LoginUserController().handle)
// router.post('/logout', new LogoutUserController().handle)

router.get('/clients', new ListClientsController().handle)
router.post('/clients', clientValidator, new CreateClientsController().handle)
router.put('/clients', new EditClientsController().handle)
router.delete('/clients', new DeleteClientsController().handle)

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
