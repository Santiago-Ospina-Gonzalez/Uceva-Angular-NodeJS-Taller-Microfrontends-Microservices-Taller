import { fakerES as faker } from '@faker-js/faker';
import { Department } from '../../../domain/interfaces/department.interface';

export const MIN_DEPARTMENT_COUNT = 1;
export const MAX_DEPARTMENT_COUNT = 100;

const departmentAreas = [
  'Tecnología',
  'Administración',
  'Creatividad',
  'Producción',
  'Servicio',
  'Innovación',
] as const;

const departmentStatuses = ['Activo', 'Inactivo'] as const;

/** Generates simulated department records with stable, unique identifiers per response. */
export class DepartmentsService {
  public async getAllDepartments(countDepartments: number): Promise<Department[]> {
    if (
      !Number.isSafeInteger(countDepartments) ||
      countDepartments < MIN_DEPARTMENT_COUNT ||
      countDepartments > MAX_DEPARTMENT_COUNT
    ) {
      throw new RangeError(
        `countDepartments debe ser un entero entre ${MIN_DEPARTMENT_COUNT} y ${MAX_DEPARTMENT_COUNT}.`,
      );
    }

    return Array.from({ length: countDepartments }, (_, index) => ({
      id: index + 1,
      name: faker.commerce.department(),
      area: faker.helpers.arrayElement(departmentAreas),
      status: faker.helpers.arrayElement(departmentStatuses),
    }));
  }
}
