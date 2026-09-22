import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string=''
  num2:string=''
  resultado:number=0
  operacion:string=''

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }

  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }

  multi():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }

  divi():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }

  calcular(): void{
    switch (this.operacion) {
      case 'sumar':
        this.sumar();
        break;

      case 'restar':
        this.restar();
        break;
      
      case 'multi':
        this.multi();
        break;
    
      case 'divi':
        this.divi();
        break;
      
      default:
        this.resultado = 0;
        break;
    }
  }
}
