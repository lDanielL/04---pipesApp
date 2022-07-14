import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nselect
  nombre: string = 'Mondongo';
  genero: string = 'm';

  invitacionMap = {
    'm':'invitarlo',
    'f':'invitarla'
  } 

    // i18nPlural
    clientes: string[] = ['Mufa','Mondongo','el Loco Terry', 'Larry', 'Magufa'];
    clientesMap = {
      '=0':'no tenemos ningun cliente esperando',
      '=1':'tenemos un cliente esperando',
      'other': 'tenemos # clientes esperando.'
    }

    cambiarCliente(){
      this.nombre='Chumilca';
      this.genero='f';
    }

    borrarCliente(){
      this.clientes.pop();
    }


    // Keyvañie pipe
    persona = {
      nombre: 'Mondongoo',
      edad: 69,
      direcion: 'Camboya, camboyano'
    }

    // jsonpipe
    heroes = [
      {
        nombre: 'Supermondongo',
        vuela: true
      },
      {
        nombre: 'Robinn',
        vuela: false
      },
      {
        nombre: 'El Aquaso',
        vuela: false
      },
    ]


    // Async Pipe
    miObservable = interval(1000);

    valorPromesa = new Promise((resolve, reject )=>{
      setTimeout(() => {
        resolve('Tenemos data de la proimesa')
      }, 3500);
    })
  }
