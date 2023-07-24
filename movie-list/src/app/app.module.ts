import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmEkleComponent } from './film-ekle/film-ekle.component';
import { FilmListesiComponent } from './film-listesi/film-listesi.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmEkleComponent,
    FilmListesiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
