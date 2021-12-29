import { FotosModule } from './fotos/foto/foto.module';
import { FotoComponent } from './fotos/foto/foto.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    FotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
