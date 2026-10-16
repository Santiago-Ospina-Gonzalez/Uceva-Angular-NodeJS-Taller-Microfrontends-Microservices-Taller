import cors from 'cors';
import express, { Router } from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../config/swagger';

export interface ServerOptions {
  port: number;
  publicPath: string;
  routes: Router;
}

/**
 * Express server with the departments API and interactive OpenAPI docs.
 */
export class Server {
  public readonly app = express();

  constructor(private readonly options: ServerOptions) {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(this.options.publicPath));
    this.app.use(this.options.routes);
    this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    this.app.use((_req, res) =>
      res.sendFile(
        path.join(
          __dirname,
          `../../${this.options.publicPath}/index.html`,
        ),
      ),
    );
  }

  start(): void {
    this.app.listen(this.options.port, () =>
      console.log(
        `Departments microservice running on port ${this.options.port}`,
      ),
    );
  }
}
