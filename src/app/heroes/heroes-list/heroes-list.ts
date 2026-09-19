import { Component } from '@angular/core';
import {IHeroes} from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
  //
})
export class HeroesList 
{
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }
  
  heroes:IHeroes[]=[
  {
    imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:'Goku',
    description:'Estudiante de Muten Roshi',
    race:'Saiyan',
    ki:60000000
  },
  {
    imagen:'https://dragonball-api.com/characters/bulma.webp',
    nombre:'Bulma',
    description:'La mejor ingieniera de la Tierra',
    race:'Human',
    ki:0
  },
  {
    imagen:'https://dragonball-api.com/characters/roshi.webp',
    nombre:'Muten Roshi',
    description:'Maestro del estilo tortuga',
    race:'Human',
    ki:500000
  },
  {
    imagen:'https://dragonball-api.com/characters/BuuGordo_Universo7.webp',
    nombre:'Majin Buu',
    description:'Mantenido de Mr. Satan',
    race:'Majin',
    ki:8000000000000
  },
  {
    imagen:'https://dragonball-api.com/characters/Androide_18_Artwork.webp',
    nombre:'Androide 18',
    description:'Creacion de Dr. Gero',
    race:'Android',
    ki:280000000
  }
]



}
