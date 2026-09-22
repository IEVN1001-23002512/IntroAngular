import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  p1x:string=''
  p2x:string=''
  p1y:string=''
  p2y:string=''
  resultado:number=0
  
  distancia(): void{
    this.resultado=Math.sqrt(
      Math.pow(parseFloat(this.p2x),2)-Math.pow(parseFloat(this.p1x),2)+
      Math.pow(parseFloat(this.p2y),2)-Math.pow(parseFloat(this.p1y),2)
    );
  }
}
