import { Component, OnInit, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { DepartmentsTableComponent } from '../../components/departments-table/departments-table.component';
import { Department } from '../../interfaces/department.interface';
import { State } from '../../interfaces/state.interface';
import { DepartmentsService } from '../../services/departments/departments.service';

/**
 * Página principal del microfrontend de departamentos.
 * Consulta los datos y muestra una alerta o la tabla según el estado.
 */
@Component({
  selector: 'app-departments-page',
  templateUrl: './departments.page.html',
  imports: [DepartmentsTableComponent, AlertComponent],
})
export class DepartmentsPage implements OnInit {
  /** Departamentos obtenidos desde el microservicio. */
  departments: Department[] = [];

  /** Estado actual de la consulta de departamentos. */
  state: State = 'init';

  /** Servicio encargado de consultar la API de departamentos. */
  private readonly departmentsService = inject(DepartmentsService);

  /**
   * Inicia la consulta de los primeros diez departamentos
   * cuando se inicializa la página.
   */
  ngOnInit(): void {
    this.state = 'loading';

    this.departmentsService.getAllDepartments(10).subscribe({
      next: (departments) => {
        this.departments = departments;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
