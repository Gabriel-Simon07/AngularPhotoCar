import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FotoComponent } from './foto/foto.component';
import { FotoListComponent } from './foto-list/foto-list.component';

@NgModule({
declarations: [
  FotoComponent,
  FotoListComponent
],
imports: [HttpClientModule],
})
export class FotosModule {}
