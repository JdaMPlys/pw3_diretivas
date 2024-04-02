import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
  numero: number = 0;
  autenticado2: boolean = false;

  incrementar(){
    this.numero++;
  }

  autenticar2() {
    if(this.autenticado2 != false){
      this.autenticado2 = false;
    }
    else{
      this.autenticado2 = true;
      alert("nova mensagem")
    }

  }
}
