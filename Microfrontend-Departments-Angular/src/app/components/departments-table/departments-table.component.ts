import { Component, Input } from '@angular/core';
import {
  BadgeAtom,
  BadgeType,
} from '@brejcha13320/design-system-bootstrap';
import {
  Department,
  DepartmentStatus,
} from '../../interfaces/department.interface';

/**
 * Componente que presenta los departamentos en una tabla.
 * Utiliza insignias para diferenciar las áreas y los estados.
 */
@Component({
  selector: 'app-departments-table',
  templateUrl: './departments-table.component.html',
  imports: [BadgeAtom],
})
export class DepartmentsTableComponent {
  /** Lista de departamentos que recibe desde la página principal. */
  @Input() departments: Department[] = [];

  /** Relaciona cada área con el tipo de insignia que utiliza. */
  readonly areaMap: Record<string, BadgeType> = {
    'Tecnología': 'primary',
    'Administración': 'secondary',
    'Creatividad': 'warning',
    'Producción': 'success',
    Servicio: 'info',
    Innovación: 'dark',
  };

  /** Relaciona cada estado con su estilo visual. */
  readonly statusMap: Record<DepartmentStatus, BadgeType> = {
    Activo: 'success',
    Inactivo: 'danger',
  };

  /**
   * Obtiene el estilo de insignia para un área.
   * Si el área no está definida, devuelve el estilo secundario.
   *
   * @param area Nombre del área del departamento.
   * @returns Tipo de insignia que se utilizará en la interfaz.
   */
  areaBadge(area: string): BadgeType {
    return this.areaMap[area] ?? 'secondary';
  }
}
