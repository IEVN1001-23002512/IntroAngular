import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
  base:string=''
  alt:string=''
  radio:string=''
  lado:string=''
  ap:string=''
  resultado:number=0
  area:string=''

  tri():void{
    this.resultado=(parseFloat(this.base)*parseFloat(this.alt))/2
  }

  rec():void{
    this.resultado=parseFloat(this.base)*parseFloat(this.alt)
  }

  cir():void{
    this.resultado=Math.pow(parseFloat(this.radio),2)*Math.PI
  }

  pen():void{
    this.resultado=((parseFloat(this.lado)*5)*parseFloat(this.ap))/2
  }

  calcular(): void{
    switch (this.area) {
      case 'tri':
        this.tri();
        break;

      case 'rec':
        this.rec();
        break;
      
      case 'cir':
        this.cir();
        break;
    
      case 'pen':
        this.pen();
        break;
      
      default:
        this.resultado = 0;
        break;
    }
  }
}
