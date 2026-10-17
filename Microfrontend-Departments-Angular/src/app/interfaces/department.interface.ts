/**
 * Estados permitidos para un departamento.
 */
export type DepartmentStatus = 'Activo' | 'Inactivo';

/**
 * Representa un departamento recibido desde la API REST.
 */
export interface Department {
  /** Identificador numérico del departamento. */
  id: number;

  /** Nombre del departamento. */
  name: string;

  /** Área a la que pertenece el departamento. */
  area: string;

  /** Estado actual del departamento. */
  status: DepartmentStatus;
}