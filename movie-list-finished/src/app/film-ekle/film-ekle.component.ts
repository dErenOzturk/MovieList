import { Component } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-ekle',
  templateUrl: './film-ekle.component.html',
  styleUrls: ['./film-ekle.component.css'],
})
export class FilmEkleComponent {
  
  constructor(private filmService: FilmService) {
    const films = this.filmService.getFilms();
  }

  filmAdi: string = '';
  yonetmen: string = '';
  gosterimYili: number = 0;
  tur: string = '';
  posterURL: string = '';

  aktif:boolean = false;

  aktifEt(){
    this.aktif = true;
  }

  newFilm = {};

  addFilm(){
    this.newFilm = {
      filmAdi: this.filmAdi,
      yonetmen: this.yonetmen,
      gosterimYili: this.gosterimYili,
      tur: this.tur,
      posterURL: this.posterURL,
    };
    const films = this.filmService.getFilms();
    films.push(this.newFilm);

    this.filmAdi = '';
    this.yonetmen = '';
    this.gosterimYili = 0;
    this.tur = '';
    this.posterURL = '';
    
    this.aktif = false;
  }

  cancel(){
    this.aktif = false;
  }


}

