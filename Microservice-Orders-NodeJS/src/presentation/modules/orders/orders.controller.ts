import { Request, Response } from 'express';
import { OrdersService } from './orders.service';

export class OrdersController {
  private readonly ordersService = new OrdersService();

  getAllOrders = (req: Request, res: Response): void => {
    const countOrders = Number(req.params['countOrders']);

    if (!Number.isInteger(countOrders) || countOrders < 1 || countOrders > 100) {
      res.status(400).json({ error: 'countOrders debe ser un entero entre 1 y 100' });
      return;
    }

    this.ordersService
      .getAllOrders(countOrders)
      .then((orders) => res.status(200).json(orders))
      .catch(() => res.status(500).json({ error: 'Internal Server error' }));
  };
}
