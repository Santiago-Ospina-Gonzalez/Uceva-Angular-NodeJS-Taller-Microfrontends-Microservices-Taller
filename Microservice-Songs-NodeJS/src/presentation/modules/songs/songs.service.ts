import { faker } from '@faker-js/faker';
import { Song, SongGenre } from '../../../domain/interfaces/song.interface';

/** Genera canciones ficticias para pruebas y demostraciones. */
export class SongsService {
  private readonly genres: SongGenre[] = ['Pop', 'Rock', 'Jazz', 'Electronica', 'Hip Hop'];

  public async getAllSongs(countSongs: number): Promise<Song[]> {
    return Array.from({ length: countSongs }, (_, index) => this.generateSong(index + 1));
  }

  private generateSong(id: number): Song {
    return {
      id,
      title: faker.music.songName(),
      artist: faker.music.artist(),
      genre: faker.helpers.arrayElement(this.genres),
      durationSeconds: faker.number.int({ min: 120, max: 360 }),
      releasedYear: faker.number.int({ min: 1980, max: new Date().getFullYear() }),
    };
  }
}
