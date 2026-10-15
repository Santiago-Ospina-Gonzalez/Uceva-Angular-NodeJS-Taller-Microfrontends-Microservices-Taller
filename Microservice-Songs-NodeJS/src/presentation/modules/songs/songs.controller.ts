import { Request, Response } from 'express';
import { SongsService } from './songs.service';

export class SongsController {
  private readonly songsService = new SongsService();

  getAllSongs = (req: Request, res: Response): void => {
    const countSongs = Number(req.params['countSongs']);

    if (!Number.isInteger(countSongs) || countSongs < 1 || countSongs > 100) {
      res.status(400).json({ error: 'countSongs debe ser un entero entre 1 y 100' });
      return;
    }

    this.songsService
      .getAllSongs(countSongs)
      .then((songs) => res.status(200).json(songs))
      .catch(() => res.status(500).json({ error: 'Internal Server error' }));
  };
}
