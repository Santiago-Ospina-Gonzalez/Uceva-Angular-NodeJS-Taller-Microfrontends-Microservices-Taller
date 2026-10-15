import { Router } from 'express';
import { SongsController } from './songs.controller';

export class SongsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new SongsController();

    /**
     * @openapi
     * /api/songs/{countSongs}:
     *   get:
     *     summary: Obtener canciones simuladas
     *     tags: [Songs]
     *     parameters:
     *       - in: path
     *         name: countSongs
     *         required: true
     *         schema: { type: integer, minimum: 1, maximum: 100, example: 10 }
     *     responses:
     *       200:
     *         description: Lista de canciones
     *       400:
     *         description: Cantidad inválida
     */
    router.get('/:countSongs', controller.getAllSongs);
    return router;
  }
}
