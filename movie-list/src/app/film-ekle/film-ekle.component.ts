import { Component, Output, EventEmitter } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-film-ekle',
  templateUrl: './film-ekle.component.html',
  styleUrls: ['./film-ekle.component.css'],
})
export class FilmEkleComponent {

  @Output() filmEklendi = new EventEmitter<Film>();

  film: Film = {
    filmAdi: '',
    yonetmen: '',
    gosterimYili: 0,
    tur: '',
    posterURL: '',
  };

  onSubmit() {
    // Film objesini filmEklendi event'ine gönderelim
    this.filmEklendi.emit(this.film);
    // Ekleme işlemi tamamlandıktan sonra film nesnesini sıfırlayalım
    this.film = {
      filmAdi: '',
      yonetmen: '',
      gosterimYili: 0,
      tur: '',
      posterURL: ''
    };
  }
}
