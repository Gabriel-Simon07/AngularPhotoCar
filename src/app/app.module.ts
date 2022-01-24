import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
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
    HomeModule,
    CoreModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
