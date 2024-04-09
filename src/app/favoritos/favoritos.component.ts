import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  professores: any[] =
  [{"nome":"Marion", "favorito":true},
   {"nome":"Guilherme", "favorito":true},
   {"nome":"Rogerio", "favorito":true},
   {"nome":"Adriano", "favorito":false},
   {"nome":"Marcos", "favorito":true},
   {"nome":"Marco", "favorito":false},
   {"nome":"Edson", "favorito":true}]

}
