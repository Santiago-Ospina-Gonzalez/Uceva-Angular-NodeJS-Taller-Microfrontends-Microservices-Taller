import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../interfaces/department.interface';

/**
 * Servicio encargado de consultar los departamentos
 * disponibles en el microservicio mediante una API REST.
 */
@Injectable({ providedIn: 'root' })
export class DepartmentsService {
  /** Cliente HTTP utilizado para consultar la API. */
  private readonly httpClient = inject(HttpClient);

  /** Dirección base del endpoint de departamentos. */
  private readonly endpoint = 'http://localhost:3005/api/departments';

  /**
   * Obtiene una cantidad determinada de departamentos.
   *
   * @param countDepartments Cantidad de departamentos solicitados.
   * @returns Observable con la lista de departamentos recibida desde la API.
   */
  getAllDepartments(countDepartments: number): Observable<Department[]> {
    return this.httpClient.get<Department[]>(
      `${this.endpoint}/${countDepartments}`
    );
  }
}
