import { Component} from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-filmdetay',
  templateUrl: './filmdetay.component.html',
  styleUrls: ['./filmdetay.component.css']
})
export class FilmdetayComponent {
  
  films: any[] = [];
  aktif:boolean = false;
  index:number = 0;

  constructor(private filmService: FilmService) {
    this.films = this.filmService.getFilms();
  }

  deleteFilm(index:number){
    const films = this.filmService.getFilms();
    films.splice(index,1);
  }

  editFilm() {
    this.aktif = true;
  }


  
}
