import { Foto } from './../../foto/foto';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ap-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnChanges {

  @Input() fotos: Foto[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.fotos)
      this.rows = this.groupColumns(this.fotos);
  }

  groupColumns(foto: Foto[]) {
    const novasLinhas = [];

    for(let index = 0; index < this.fotos.length; index+=3) {
      novasLinhas.push(this.fotos.slice(index, index + 3));
    }

    return novasLinhas;
  }

}
