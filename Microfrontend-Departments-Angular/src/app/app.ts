import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente principal del microfrontend de departamentos.
 * Contiene el espacio donde se muestran las páginas según la ruta activa.
 */
@Component({ selector: 'app-root', template: '<router-outlet />', imports: [RouterOutlet] })
export class App {}
