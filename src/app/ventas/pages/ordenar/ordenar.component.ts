import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {


  enMayusculas: boolean = true;
  ordernarPor: string = '';

  heroes:Heroe[] = [
    {
    nombre: 'Mondongo',
    vuela: true,
    color: Color.azul
  },
    {
    nombre: 'Cuchufleta',
    vuela: false,
    color: Color.rojo
  },
    {
    nombre: 'Macufla',
    vuela: true,
    color: Color.negro
  },
    {
    nombre: 'Bananero',
    vuela: false,
    color: Color.verde
  }
];

  toggleMayusuculas(){

    this.enMayusculas= !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordernarPor = valor;
    console.log(valor);
  }

}
