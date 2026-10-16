import { Router } from 'express';
import { DepartmentsController } from './departments.controller';

export class DepartmentsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new DepartmentsController();

    /**
     * @openapi
     * /api/departments/{countDepartments}:
     *   get:
     *     summary: Obtener listado de departamentos
     *     description: Genera un listado simulado con la cantidad solicitada.
     *     tags: [Departments]
     *     parameters:
     *       - in: path
     *         name: countDepartments
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           maximum: 100
     *           example: 10
     *         description: Cantidad de departamentos a generar; debe estar entre 1 y 100.
     *     responses:
     *       200:
     *         description: Lista de departamentos generada.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/Department' }
     *       400:
     *         description: countDepartments no está entre 1 y 100 o no es un entero.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: [error]
     *               properties:
     *                 error: { type: string, example: 'countDepartments debe ser un entero entre 1 y 100.' }
     *       500:
     *         description: No fue posible generar los departamentos.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: [error]
     *               properties:
     *                 error: { type: string, example: 'No fue posible generar los departamentos.' }
     */
    router.get('/:countDepartments', controller.getAllDepartments);

    return router;
  }
}
