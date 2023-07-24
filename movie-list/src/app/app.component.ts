import { Component } from '@angular/core';
import { Film } from './film.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmler: Film[] = [];

  filmEklendi(film: Film) {
    this.filmler.push(film);
  }
}
