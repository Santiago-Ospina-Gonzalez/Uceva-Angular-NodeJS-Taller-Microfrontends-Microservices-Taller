import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
@Component({ selector: 'app-orders-table', templateUrl: './orders-table.component.html', imports: [CommonModule] })
export class OrdersTableComponent { @Input() orders: Order[] = []; }
