# Microservice-Departments-NodeJS

API REST en TypeScript que genera departamentos simulados con `@faker-js/faker`.

## Instalación

Requiere Node.js y npm:

```powershell
npm install
```

## Ejecución y endpoints

```powershell
npm run start
```

El servicio escucha en el puerto 3005.

- `GET http://localhost:3005/api/departments/{countDepartments}` genera entre 1 y 100 departamentos. Los IDs son secuenciales y únicos en cada respuesta.
- Respuesta exitosa: HTTP 200 y un arreglo de `{ id, name, area, status }`.
- `area` usa las áreas `Tecnología`, `Administración`, `Creatividad`, `Producción`, `Servicio` o `Innovación`; `status` es `Activo` o `Inactivo`.
- Cantidad inválida (no entero entre 1 y 100): HTTP 400 con un objeto `error`.
- Error al generar datos: HTTP 500 con un objeto `error`.
- Swagger UI: `http://localhost:3005/api/docs/`.

## Pruebas, cobertura y compilación

```powershell
npm test
npm run test:coverage
npm run build
```

`npm run build` ejecuta `tsc --noEmit` para verificar tipos sin emitir archivos.
