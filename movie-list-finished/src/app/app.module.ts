import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmEkleComponent } from './film-ekle/film-ekle.component';
import { FilmListesiComponent } from './film-listesi/film-listesi.component';
import { FilmdetayComponent } from './filmdetay/filmdetay.component';
import { FilmDuzenleComponent } from './film-duzenle/film-duzenle.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmEkleComponent,
    FilmListesiComponent,
    FilmdetayComponent,
    FilmDuzenleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
