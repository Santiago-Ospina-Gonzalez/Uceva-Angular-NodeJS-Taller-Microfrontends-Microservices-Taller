import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongsTableComponent } from './songs-table.component';

describe('SongsTableComponent', () => {
  let fixture: ComponentFixture<SongsTableComponent>;
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [SongsTableComponent] }).compileComponents(); fixture = TestBed.createComponent(SongsTableComponent); });
  it('crea la tabla y recibe canciones', () => { fixture.componentInstance.songs = [{ id: 1, title: 'Song', artist: 'Artist', genre: 'Rock', durationSeconds: 180, releasedYear: 2020 }]; fixture.detectChanges(); expect(fixture.nativeElement.textContent).toContain('Song'); });
});
