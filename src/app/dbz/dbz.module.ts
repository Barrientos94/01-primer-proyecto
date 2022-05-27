import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonajesComponent } from './personajes/personajes.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent
  ],
  exports:[
    MainPageComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
