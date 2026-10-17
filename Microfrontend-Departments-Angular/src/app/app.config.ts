import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
/**
 * Configuración general de la aplicación Angular.
 * Registra el cliente HTTP y el sistema de enrutamiento.
 */
export const appConfig: ApplicationConfig = {
 providers: [
    /** Permite realizar solicitudes HTTP a los servicios. */
    provideHttpClient(),
    /** Registra las rutas de la aplicación. */
    provideRouter(routes)] };
