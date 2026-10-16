/**
 * Estados generales de la consulta de departamentos.
 * Se utilizan para controlar la información que muestra la página.
 */
export type State = 'init' | 'loading' | 'success' | 'error';

/**
 * Estados que puede presentar el componente de alerta.
 * loading representa una consulta en curso y error indica un fallo.
 */
export type AlertState = 'loading' | 'error';
