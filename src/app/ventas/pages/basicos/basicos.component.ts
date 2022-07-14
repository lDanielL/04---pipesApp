import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower:string ='mondongo';
  nombreUpper:string='Mondongo';
  nombreCompleto:string='mOndonGo';

  fecha: Date = new Date(); // El día de hoy
}
