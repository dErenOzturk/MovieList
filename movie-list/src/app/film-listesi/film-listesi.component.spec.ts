import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListesiComponent } from './film-listesi.component';

describe('FilmListesiComponent', () => {
  let component: FilmListesiComponent;
  let fixture: ComponentFixture<FilmListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmListesiComponent]
    });
    fixture = TestBed.createComponent(FilmListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
