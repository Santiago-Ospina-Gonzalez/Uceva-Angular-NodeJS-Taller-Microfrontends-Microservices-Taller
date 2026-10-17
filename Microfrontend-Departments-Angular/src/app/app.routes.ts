import { Routes } from '@angular/router';

/**
 * Define las rutas disponibles en el microfrontend de departamentos.
 * La ruta principal carga la página de departamentos de forma diferida.
 */

export const routes: Routes = [
  {
    /** Ruta principal del microfrontend. */
    path: '',
     /** Carga el componente de la página de departamentos cuando se necesita. */
    loadComponent: () => import('./pages/departments/departments.page').then((module) => module.DepartmentsPage) },
];
