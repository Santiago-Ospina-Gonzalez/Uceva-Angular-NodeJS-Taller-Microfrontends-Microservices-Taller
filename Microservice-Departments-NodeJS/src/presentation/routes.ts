import { Router } from 'express';
import { DepartmentsRoutes } from './modules/departments/departments.routes';
export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/departments', DepartmentsRoutes.routes);
    return router;
  }
}
