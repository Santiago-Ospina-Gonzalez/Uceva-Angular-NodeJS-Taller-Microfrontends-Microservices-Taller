jest.mock('@faker-js/faker', () => ({ fakerES: { commerce: { department: () => 'Technology' }, helpers: { arrayElement: (values: readonly string[]) => values[0] } } }));
import { DepartmentsService } from './departments.service';

describe('DepartmentsService', () => {
  const service = new DepartmentsService();

  it('generates exactly the requested number with sequential unique IDs and expected fields', async () => {
    const departments = await service.getAllDepartments(25);
    expect(departments).toHaveLength(25);
    expect(new Set(departments.map(({ id }) => id)).size).toBe(25);
    expect(departments.map(({ id }) => id)).toEqual(Array.from({ length: 25 }, (_, index) => index + 1));
    departments.forEach((department) => {
      expect(department).toEqual({ id: expect.any(Number), name: expect.any(String), area: expect.any(String), status: expect.any(String) });
      expect(department.name.length).toBeGreaterThan(0);
      expect(['Tecnología', 'Administración', 'Creatividad', 'Producción', 'Servicio', 'Innovación']).toContain(department.area);
      expect(['Activo', 'Inactivo']).toContain(department.status);
    });
  });

  it.each([0, -1, 1.5, 101, Number.MAX_SAFE_INTEGER])('rejects invalid count %s', async (count) => {
    await expect(service.getAllDepartments(count)).rejects.toThrow(RangeError);
  });
});