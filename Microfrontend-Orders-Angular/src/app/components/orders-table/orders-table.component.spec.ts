import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersTableComponent } from './orders-table.component';

describe('OrdersTableComponent', () => {
  let fixture: ComponentFixture<OrdersTableComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [OrdersTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(OrdersTableComponent);
  });
  it('crea la tabla y recibe órdenes', () => {
    fixture.componentInstance.orders = [{ id: 1, customerName: 'Ana', total: 20, status: 'Pendiente', createdAt: '2026-01-01T00:00:00.000Z' }];
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Ana');
  });
});
