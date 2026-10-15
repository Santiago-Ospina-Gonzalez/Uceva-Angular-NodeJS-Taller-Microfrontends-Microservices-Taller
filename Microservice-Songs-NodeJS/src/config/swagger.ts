import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Songs API', version: '1.0.0', description: 'API de canciones simuladas' },
    servers: [{ url: 'http://localhost:3004' }],
  },
  apis: ['./src/presentation/modules/**/*.routes.ts'],
});
