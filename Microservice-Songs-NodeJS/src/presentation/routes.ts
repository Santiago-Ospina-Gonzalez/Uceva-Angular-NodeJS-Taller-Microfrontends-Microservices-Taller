import { Router } from 'express';
import { SongsRoutes } from './modules/songs/songs.routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/songs', SongsRoutes.routes);
    return router;
  }
}
