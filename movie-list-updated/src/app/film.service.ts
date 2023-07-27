import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private films: any[] = [];
  
  getFilms(): any[] {
    return this.films;
  }

  updateFilmList(newFilms:any[]){
    this.films = newFilms;
  }

  constructor() {}
}
