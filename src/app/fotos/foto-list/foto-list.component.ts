import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  fotos: any[] = []

  constructor(private fotoService: FotoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.fotoService.listFromUser(userName).subscribe(fotos => {this.fotos = fotos});

  }

}
