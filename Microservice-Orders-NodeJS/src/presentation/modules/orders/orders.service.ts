import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../../domain/interfaces/order.interface';

/** Genera órdenes ficticias para pruebas y demostraciones. */
export class OrdersService {
  private readonly statuses: OrderStatus[] = [
    'Pendiente',
    'Procesando',
    'Enviada',
    'Entregada',
  ];

  public async getAllOrders(countOrders: number): Promise<Order[]> {
    return Array.from({ length: countOrders }, (_, index) => this.generateOrder(index + 1));
  }

  private generateOrder(id: number): Order {
    return {
      id,
      customerName: faker.person.fullName(),
      total: Number(faker.commerce.price({ min: 20, max: 500, dec: 2 })),
      status: faker.helpers.arrayElement(this.statuses),
      createdAt: faker.date.recent({ days: 30 }).toISOString(),
    };
  }
}
