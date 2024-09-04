import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';

export interface Persona{
  nombre: string
  imagen: string
  cedula?: string
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  @Input() imagenDelPadre: string = '';  
  @Output() emisor = new EventEmitter<string>(); 
  image="https://material.angular.io/assets/img/examples/shiba2.jpg";

  nombre='';
  nombres:Persona[] = [
    {nombre:'Andres', imagen: 'https://www.21-draw.com/wp-content/uploads/2022/06/character-archetype-the-hero.jpg'},
    {nombre:'Juan Carlos', imagen: 'https://i.blogs.es/331ba5/es-oficial-el-personaje-mas-poderoso-del-anime-no-es-goku-de-dragon-ball-ni-luffy-de-one-piece-/500_333.jpeg'},
    {nombre:'Lorena', imagen: 'https://mario.nintendo.com/static/e3ebf11b069067da929b608250baa44e/55d59/toad.png'}
  ]

  setName(){
    this.nombre = 'Darth Vader';
  }

  alerta(nombre: string){
    if(nombre === 'Darth Vader')
      window.alert('Yo soy tu padre');
  }

}
