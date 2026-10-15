import { Routes } from '@angular/router';
export const routes: Routes = [{ path: '', loadComponent: () => import('./pages/songs/songs.page').then((m) => m.SongsPage) }];
