import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Foto } from './../foto/foto';
import { FotoService } from './../foto/foto.service';
@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  fotos: Foto[] = []
  filter: string = '';

  temMais: boolean = true;
  valorPagina: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private fotoService: FotoService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.fotos = this.activatedRoute.snapshot.data['fotos'];
  }

  load() {
    this.fotoService.listFromUserPaginated(this.userName, ++this.valorPagina)
    .subscribe(fotos => {
      this.filter = '';
      this.fotos = this.fotos.concat(fotos);
    if(!this.fotos.length) this.temMais = false;});
  }
}
