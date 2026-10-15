import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../interfaces/songs.interface';
@Injectable({ providedIn: 'root' })
export class SongsService {
  private readonly httpClient = inject(HttpClient);
  getAllSongs(countSongs: number): Observable<Song[]> { return this.httpClient.get<Song[]>(`http://localhost:3004/api/songs/${countSongs}`); }
}
