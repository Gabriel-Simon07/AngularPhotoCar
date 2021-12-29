import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fotos = [
    {
      url: "https://i.pinimg.com/600x315/62/ec/98/62ec98d3965a4698653a61d26dfc9e16.jpg",
      descricao: "fusca oval"
    },
    {
      url: "https://i.pinimg.com/600x315/62/ec/98/62ec98d3965a4698653a61d26dfc9e16.jpg",
      descricao: "fusca oval repetido"
    }
  ]
}
