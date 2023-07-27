import { Component, Input } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-duzenle',
  templateUrl: './film-duzenle.component.html',
  styleUrls: ['./film-duzenle.component.css']
})
export class FilmDuzenleComponent {
  films: any[] = [];

  filmAdi: string = '';
  yonetmen: string = '';
  gosterimYili: number = 0;
  tur: string = '';
  posterURL: string = '';

  @Input() aktifEdit:boolean = false;
  @Input() indexEdit:number = 0;

  constructor(private filmService: FilmService) {
    this.films = this.filmService.getFilms();
  }

  newFilm = {};

  updateFilm(index:number){
    this.newFilm = {
      filmAdi: this.filmAdi,
      yonetmen: this.yonetmen,
      gosterimYili: this.gosterimYili,
      tur: this.tur,
      posterURL: this.posterURL}
     
    this.films.splice(index,1, this.newFilm);
    this.aktifEdit = false;
    
  }

  closeEdit(){
    this.aktifEdit = false;
  }
  

}
