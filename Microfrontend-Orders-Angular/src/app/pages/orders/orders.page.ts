import { Component, inject } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';
import { Order } from '../../interfaces/orders.interface';
import { State } from '../../interfaces/state.interface';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
@Component({ selector: 'app-orders', templateUrl: './orders.page.html', imports: [OrdersTableComponent] })
export class OrdersPage {
  orders: Order[] = [];
  state: State = 'init';
  private readonly ordersService = inject(OrdersService);
  ngOnInit(): void { this.state = 'loading'; this.ordersService.getAllOrders(10).subscribe({ next: (orders) => { this.orders = orders; this.state = 'success'; }, error: () => { this.state = 'error'; } }); }
}
