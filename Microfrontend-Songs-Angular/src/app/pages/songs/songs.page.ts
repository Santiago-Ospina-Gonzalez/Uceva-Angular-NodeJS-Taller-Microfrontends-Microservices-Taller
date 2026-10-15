import { Component, inject } from '@angular/core';
import { SongsService } from '../../services/songs/songs.service';
import { Song } from '../../interfaces/songs.interface';
import { State } from '../../interfaces/state.interface';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';
@Component({ selector: 'app-songs', templateUrl: './songs.page.html', imports: [SongsTableComponent] })
export class SongsPage {
  songs: Song[] = [];
  state: State = 'init';
  private readonly songsService = inject(SongsService);
  ngOnInit(): void { this.state = 'loading'; this.songsService.getAllSongs(10).subscribe({ next: (songs) => { this.songs = songs; this.state = 'success'; }, error: () => { this.state = 'error'; } }); }
}
