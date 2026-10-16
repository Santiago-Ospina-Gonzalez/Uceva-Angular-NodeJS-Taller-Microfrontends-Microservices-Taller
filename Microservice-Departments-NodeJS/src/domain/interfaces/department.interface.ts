export type DepartmentStatus = 'Activo' | 'Inactivo';

/** Department managed by the in-memory catalog. */
export interface Department {
  id: number;
  name: string;
  area: string;
  status: DepartmentStatus;
}
