# Microfrontend-Departments-Angular

Microfrontend standalone de Angular 20 expuesto mediante Module Federation como `./DepartmentsPage` (remote `mf-departments`, puerto 4205). La página obtiene sus datos en tiempo de ejecución desde `DepartmentsService`, que consulta `GET http://localhost:3005/api/departments/10`.

## Instalación y ejecución

```powershell
npm install
npm run start
```

El microfrontend se sirve en `http://localhost:4205`. Para integrarlo, el Host carga `./DepartmentsPage` en la ruta `/departments`. Inicia también el microservicio en el puerto 3005.

## Pruebas, cobertura, compilación y documentación

```powershell
npm test -- --runInBand
npm run test:coverage -- --runInBand
npm run build
npm run compodoc
```

Jest genera el reporte de cobertura en `coverage/`. Compodoc genera la documentación a partir de `tsconfig.doc.json`.

## API consumida

- `GET http://localhost:3005/api/departments/{countDepartments}`; acepta cantidades enteras de 1 a 100 y la página solicita 10.
- El endpoint devuelve HTTP 200 y una lista de departamentos con `id`, `name`, `area` y `status`; los errores de red se muestran en la alerta de error.
- Swagger UI del microservicio: `http://localhost:3005/api/docs/`.
