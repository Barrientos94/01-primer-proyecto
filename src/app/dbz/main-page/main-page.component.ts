import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes : Personaje[] = [
    {
      nombre: 'Goku',
      poder: 10000
    },
    {
      nombre: 'Vegueta',
      poder: 9000
    },
    {
      nombre: 'Piccolo',
      poder: 8000
    }
  ]
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2000
  } 
  
  constructor() { }

  ngOnInit(): void {
  }
 


}
