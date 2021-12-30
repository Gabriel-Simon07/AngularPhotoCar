import { NotFoundComponent } from './errors/not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { FotosModule } from './fotos/foto.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    FotosModule,
    AppRoutingModule,
    ErrorsModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
