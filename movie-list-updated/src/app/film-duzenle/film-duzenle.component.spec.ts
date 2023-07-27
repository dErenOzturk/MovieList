import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDuzenleComponent } from './film-duzenle.component';

describe('FilmDuzenleComponent', () => {
  let component: FilmDuzenleComponent;
  let fixture: ComponentFixture<FilmDuzenleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDuzenleComponent]
    });
    fixture = TestBed.createComponent(FilmDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
