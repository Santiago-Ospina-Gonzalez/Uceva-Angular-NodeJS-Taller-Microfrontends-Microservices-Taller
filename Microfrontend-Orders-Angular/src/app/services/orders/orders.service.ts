import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';
@Injectable({ providedIn: 'root' })
export class OrdersService {
  private readonly httpClient = inject(HttpClient);
  getAllOrders(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`http://localhost:3003/api/orders/${countOrders}`);
  }
}
