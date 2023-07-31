import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-duzenle',
  templateUrl: './film-duzenle.component.html',
  styleUrls: ['./film-duzenle.component.css'],
})
export class FilmDuzenleComponent {
  
  constructor(private filmService: FilmService) {
    this.films = this.filmService.getFilms();
  }


  /*
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['indexEdit'] && this.aktifEdit) {
      this.initFilmData();
    }
  }

  initFilmData() {
    const selectedFilm = this.films[this.indexEdit];
    this.filmAdi = selectedFilm.filmAdi;
    this.yonetmen = selectedFilm.yonetmen;
    this.gosterimYili = selectedFilm.gosterimYili;
    this.tur = selectedFilm.tur;
    this.posterURL = selectedFilm.posterURL;
  }*/


  films: any[] = [];

  filmAdi: string = '';
  yonetmen: string = '';
  gosterimYili: number = 0;
  tur: string = '';
  posterURL: string = '';

  @Input() aktifEdit: boolean = false;
  @Input() indexEdit: number = 0;
  @Output() setAktifEvent = new EventEmitter <boolean>();

  newFilm = {};

  updateFilm(index: number) {
    this.newFilm = {
      filmAdi: this.filmAdi,
      yonetmen: this.yonetmen,
      gosterimYili: this.gosterimYili,
      tur: this.tur,
      posterURL: this.posterURL,
    };
    
    this.films.splice(index, 1, this.newFilm);
    this.aktifEdit = false;
    this.setAktifEvent.emit(this.aktifEdit);
  }

  closeEdit() {
    this.aktifEdit = false;
    this.setAktifEvent.emit(this.aktifEdit);
  }
}
