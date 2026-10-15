import { Router } from 'express';
import { OrdersController } from './orders.controller';

export class OrdersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new OrdersController();

    /**
     * @openapi
     * /api/orders/{countOrders}:
     *   get:
     *     summary: Obtener órdenes simuladas
     *     tags: [Orders]
     *     parameters:
     *       - in: path
     *         name: countOrders
     *         required: true
     *         schema: { type: integer, minimum: 1, maximum: 100, example: 10 }
     *     responses:
     *       200:
     *         description: Lista de órdenes
     *       400:
     *         description: Cantidad inválida
     */
    router.get('/:countOrders', controller.getAllOrders);
    return router;
  }
}
