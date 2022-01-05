import { FotoListModule } from './foto-list/foto-list.module';
import { FotoFormModule } from './foto-form/foto-form.module';
import { FotoModule } from './foto/foto.module';
import { NgModule } from '@angular/core';

@NgModule({

imports: [
  FotoModule,
  FotoFormModule,
  FotoListModule,
],
})
export class FotosModule {}
