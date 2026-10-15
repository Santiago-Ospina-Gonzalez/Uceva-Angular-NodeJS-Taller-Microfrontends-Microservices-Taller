export interface Order { id: number; customerName: string; total: number; status: OrderStatus; createdAt: string; }
export type OrderStatus = 'Pendiente' | 'Procesando' | 'Enviada' | 'Entregada';
