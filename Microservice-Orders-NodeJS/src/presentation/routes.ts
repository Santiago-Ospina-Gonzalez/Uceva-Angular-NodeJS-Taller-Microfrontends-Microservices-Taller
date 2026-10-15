import { Router } from 'express';
import { OrdersRoutes } from './modules/orders/orders.routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/orders', OrdersRoutes.routes);
    return router;
  }
}
