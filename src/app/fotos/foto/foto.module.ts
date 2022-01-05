import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    FotoComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [FotoComponent]
})

export class FotoModule{}
