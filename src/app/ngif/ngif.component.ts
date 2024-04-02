import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

  autenticado: boolean = false;

  autenticar() {
    if(this.autenticado != false){
      this.autenticado = false;
    }
    else{
      this.autenticado = true;
    }

  }


}
