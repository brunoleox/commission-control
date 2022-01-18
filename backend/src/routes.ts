import { Router } from 'express'
import { clientValidator } from './middlewares/validatorClient'
import { productValidator } from './middlewares/validatorProducts'

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

const router = Router()

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
router.put('/products/:code', new EditProductsController().handle)
router.delete('/products', new DeleteProductsController().handle)

router.post('/orders', new CreateOrderController().handle)
router.get('/orders', new ListOrdersController().handle)

export { router }
