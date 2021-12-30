import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  fotos: any[] = []

  constructor(private fotoService: FotoService) { }

  ngOnInit(): void {

    this.fotoService.listFromUser('flavio').subscribe(fotos => {this.fotos = fotos});

  }

}
