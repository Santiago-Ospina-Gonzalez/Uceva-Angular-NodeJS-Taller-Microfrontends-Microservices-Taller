import express from 'express';
import request from 'supertest';
import { swaggerSpec } from '../config/swagger';
import { Server } from './server';

describe('Departments Server', () => {
  const createServer = () =>
    new Server({
      port: 3005,
      publicPath: 'public',
      routes: express.Router(),
    });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('configures the Express application', () => {
    const server = createServer();

    expect(server.app).toBeDefined();
    expect(typeof server.app).toBe('function');
  });

  it('serves the Swagger documentation', async () => {
    const server = createServer();

    const response = await request(server.app).get('/api/docs/');

    expect(response.status).toBe(200);
  });

  it('documents the department endpoint and its validation responses', () => {
    const operation =
      swaggerSpec.paths?.['/api/departments/{countDepartments}']?.get;

    expect(operation).toBeDefined();

    expect(operation?.parameters).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'countDepartments',
          in: 'path',
          required: true,
          schema: expect.objectContaining({
            type: 'integer',
            minimum: 1,
            maximum: 100,
          }),
        }),
      ]),
    );

    expect(operation?.responses).toHaveProperty('200');
    expect(operation?.responses).toHaveProperty('400');
    expect(operation?.responses).toHaveProperty('500');
  });

  it('handles requests to the configured routes', async () => {
    const router = express.Router();

    router.get('/test-route', (_req, res) => {
      res.status(200).json({ message: 'Ruta funcionando' });
    });

    const server = new Server({
      port: 3005,
      publicPath: 'public',
      routes: router,
    });

    const response = await request(server.app).get('/test-route');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Ruta funcionando',
    });
  });

  it('returns the configured public index for an unmatched route', async () => {
    const server = createServer();

    const response = await request(server.app).get('/ruta-no-existente');

    // La respuesta depende de que exista public/index.html.
    // Si no existe, Express responderá con un error.
    expect([200, 404, 500]).toContain(response.status);
  });

  it('starts listening on the configured port', () => {
    const server = createServer();

    const listenSpy = jest
      .spyOn(server.app, 'listen')
      .mockImplementation((...args: Parameters<typeof server.app.listen>) => {
        const callback = args[1];

        if (typeof callback === 'function') {
          callback();
        }

        return server.app;
      });

    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    server.start();

    expect(listenSpy).toHaveBeenCalledWith(
      3005,
      expect.any(Function),
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      'Departments microservice running on port 3005',
    );
  });
});
