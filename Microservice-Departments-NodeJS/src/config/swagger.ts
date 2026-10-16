import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Departments API',
      version: '1.0.0',
      description: 'API REST para consultar departamentos simulados.',
    },
    servers: [{ url: 'http://localhost:3005' }],
    components: {
      schemas: {
        Department: {
          type: 'object',
          required: ['id', 'name', 'area', 'status'],
          properties: {
            id: { type: 'integer', minimum: 1, example: 1 },
            name: { type: 'string', example: 'Joyería' },
            area: {
              type: 'string',
              enum: [
                'Tecnología',
                'Administración',
                'Creatividad',
                'Producción',
                'Servicio',
                'Innovación',
              ],
              example: 'Tecnología',
            },
            status: { type: 'string', enum: ['Activo', 'Inactivo'], example: 'Activo' },
          },
        },
      },
    },
  },
  apis: ['./src/presentation/modules/**/*.routes.ts'],
});
