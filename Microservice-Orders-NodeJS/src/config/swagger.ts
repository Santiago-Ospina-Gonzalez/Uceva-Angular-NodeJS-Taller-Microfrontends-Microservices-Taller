import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Orders API', version: '1.0.0', description: 'API de órdenes simuladas' },
    servers: [{ url: 'http://localhost:3003' }],
  },
  apis: ['./src/presentation/modules/**/*.routes.ts'],
});
