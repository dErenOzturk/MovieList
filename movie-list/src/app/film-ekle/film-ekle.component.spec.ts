import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmEkleComponent } from './film-ekle.component';

describe('FilmEkleComponent', () => {
  let component: FilmEkleComponent;
  let fixture: ComponentFixture<FilmEkleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmEkleComponent]
    });
    fixture = TestBed.createComponent(FilmEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
