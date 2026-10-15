export interface Song { id: number; title: string; artist: string; genre: SongGenre; durationSeconds: number; releasedYear: number; }
export type SongGenre = 'Pop' | 'Rock' | 'Jazz' | 'Electronica' | 'Hip Hop';
