import { Component, Input } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-film-listesi',
  templateUrl: './film-listesi.component.html',
  styleUrls: ['./film-listesi.component.css'],
})
export class FilmListesiComponent {
  @Input() filmler: Film[] = [];

  filmEklendi(film:Film){
    this.filmler.push(film);
  }
}
