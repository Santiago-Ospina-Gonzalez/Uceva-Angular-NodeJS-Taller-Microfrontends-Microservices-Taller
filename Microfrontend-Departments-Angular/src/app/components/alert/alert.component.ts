import { Component, Input } from '@angular/core';
import { AlertState } from '../../interfaces/state.interface';
import { IconAtom } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente reutilizable para mostrar alertas de carga y error.
 * Utiliza los estilos e iconos del sistema de diseño del proyecto.
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  imports: [IconAtom],
})
export class AlertComponent {
  /** Estado de la alerta: carga o error. */
  @Input({ required: true }) alertState!: AlertState;

  /** Mensaje que se mostrará en la alerta. */
  @Input() text = '';

  /** Relaciona cada estado con la clase visual correspondiente. */
  readonly alertClassMap: Record<AlertState, 'primary' | 'danger'> = {
    error: 'danger',
    loading: 'primary',
  };

  /**
   * Construye las clases CSS según el estado de la alerta.
   *
   * @returns Cadena de clases CSS para presentar la alerta.
   */
  getClass(): string {
    return `alert alert-${this.alertClassMap[this.alertState]} d-flex align-items-center`;
  }
}
