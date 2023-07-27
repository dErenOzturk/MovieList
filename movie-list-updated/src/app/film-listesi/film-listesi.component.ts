import { Component } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-listesi',
  templateUrl: './film-listesi.component.html',
  styleUrls: ['./film-listesi.component.css'],
})
export class FilmListesiComponent {
  films: any[] = [];

  constructor(private filmService: FilmService) {
    this.films = this.filmService.getFilms();
  }

}
