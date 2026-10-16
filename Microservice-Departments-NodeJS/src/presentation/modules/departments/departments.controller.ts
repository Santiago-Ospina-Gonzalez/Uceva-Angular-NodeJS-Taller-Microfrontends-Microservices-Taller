import { Request, Response } from 'express';
import {
  DepartmentsService,
  MAX_DEPARTMENT_COUNT,
  MIN_DEPARTMENT_COUNT,
} from './departments.service';

/** Handles requests for the department list. */
export class DepartmentsController {
  private readonly departmentsService = new DepartmentsService();

  getAllDepartments = (req: Request, res: Response): void => {
    const rawCount = req.params['countDepartments'];
    const countDepartments = typeof rawCount === 'string' ? Number(rawCount) : NaN;

    if (
      typeof rawCount !== 'string' ||
      !/^\d+$/.test(rawCount) ||
      !Number.isSafeInteger(countDepartments) ||
      countDepartments < MIN_DEPARTMENT_COUNT ||
      countDepartments > MAX_DEPARTMENT_COUNT
    ) {
      res.status(400).json({
        error: `countDepartments debe ser un entero entre ${MIN_DEPARTMENT_COUNT} y ${MAX_DEPARTMENT_COUNT}.`,
      });
      return;
    }

    this.departmentsService
      .getAllDepartments(countDepartments)
      .then((departments) => res.status(200).json(departments))
      .catch(() => {
        res.status(500).json({ error: 'No fue posible generar los departamentos.' });
      });
  };
}
