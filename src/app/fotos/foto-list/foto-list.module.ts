import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { FotoModule } from './../foto/foto.module';
import { FiltroPorDescricao } from './filtro-por-descricao.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FotosComponent } from './fotos/fotos.component';
import { FotoListComponent } from './foto-list.component';
import { DarkenOnHoverDirectModule } from 'src/app/shared/diretivas/dark-on-hover/darken-on-hover-module';

@NgModule({
  declarations: [
    FotoListComponent,
    FotosComponent,
    LoadButtonComponent,
    FiltroPorDescricao,
    SearchComponent,
  ],
  imports: [CommonModule, FotoModule, CardModule, DarkenOnHoverDirectModule]
})

export class FotoListModule {

}
