import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Song } from '../../interfaces/songs.interface';
@Component({ selector: 'app-songs-table', templateUrl: './songs-table.component.html', imports: [CommonModule] })
export class SongsTableComponent { @Input() songs: Song[] = []; }
