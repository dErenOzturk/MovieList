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
    this.films.splice(index,1);
  }

  editFilm(i:number) {
    this.aktif = true;
    this.index = i;
  }

  setAktif(event:boolean){
    this.aktif = event;
  }

}
