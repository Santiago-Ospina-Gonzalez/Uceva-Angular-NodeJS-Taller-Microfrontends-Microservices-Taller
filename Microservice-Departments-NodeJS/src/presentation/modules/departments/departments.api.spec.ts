jest.mock('@faker-js/faker', () => ({ fakerES: { commerce: { department: () => 'Technology' }, helpers: { arrayElement: (values: readonly string[]) => values[0] } } }));
import request from 'supertest';
import { Request, Response } from 'express';
import { DepartmentsController } from './departments.controller';
import { AppRoutes } from '../../routes';
import { Server } from '../../server';
import { DepartmentsService } from './departments.service';

describe('Departments API', () => {
  let app: Server['app'];
  beforeEach(() => { app = new Server({ port: 3005, publicPath: 'public', routes: AppRoutes.routes }).app; });

  it('returns the requested number of generated departments with valid fields and unique identifiers', async () => {
    const response = await request(app).get('/api/departments/10');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10);
    expect(response.body.map((department: { id: number }) => department.id)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    for (const department of response.body) {
      expect(department).toEqual({ id: expect.any(Number), name: expect.any(String), area: expect.any(String), status: expect.any(String) });
      expect(department.name.length).toBeGreaterThan(0);
      expect(['Tecnología', 'Administración', 'Creatividad', 'Producción', 'Servicio', 'Innovación']).toContain(department.area);
      expect(['Activo', 'Inactivo']).toContain(department.status);
    }
  });

  it('returns one department when one is requested', async () => {
    const response = await request(app).get('/api/departments/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it('returns HTTP 500 when department generation fails', async () => {
    jest.spyOn(DepartmentsService.prototype, 'getAllDepartments').mockRejectedValueOnce(new Error('generation failed'));
    const response = await request(app).get('/api/departments/2');
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('No fue posible generar los departamentos.');
  });

  it.each(['0', '-1', '1.5', 'abc', '101', '9007199254740992'])('rejects invalid count %s', async (count) => {
    const response = await request(app).get(`/api/departments/${count}`);
    expect(response.status).toBe(400);
    expect(response.body.error).toContain('countDepartments');
  });

  it('rejects a non-string route parameter', () => {
    const controller = new DepartmentsController();
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    controller.getAllDepartments(
      { params: { countDepartments: ['10'] } } as unknown as Request,
      response,
    );

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      error: 'countDepartments debe ser un entero entre 1 y 100.',
    });
  });
});
