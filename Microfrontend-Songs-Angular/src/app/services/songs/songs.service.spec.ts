import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { SongsService } from './songs.service';

describe('SongsService', () => {
  let service: SongsService;
  let http: HttpTestingController;
  beforeEach(() => { TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] }); service = TestBed.inject(SongsService); http = TestBed.inject(HttpTestingController); });
  afterEach(() => http.verify());
  it('solicita canciones al microservicio', () => { service.getAllSongs(3).subscribe(); const request = http.expectOne('http://localhost:3004/api/songs/3'); expect(request.request.method).toBe('GET'); request.flush([]); });
});
