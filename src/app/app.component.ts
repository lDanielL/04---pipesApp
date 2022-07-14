import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre: string = 'Mondongo fue a la guerra';
  valor:number = 1000;

  constructor(private primengConfig: PrimeNGConfig){

  }

  mostrarNombre(){

    console.log(this.nombre);
    console.log(this.valor);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
