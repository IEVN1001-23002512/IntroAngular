import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  nombre: string = '';
  cantidadB: string = '';
  cantidadC: string = '';
  tarjeta: string = '';

  valorP: number = 0;

  contadorC: number = 0;

  nombreMax: string = '';
  cantidadMax: number = 0;


  procesar(): void {

    let compradores: number = parseInt(this.cantidadC, 10);
    let boletas: number = parseInt(this.cantidadB, 10);

    let precio: number = 12;
    let subtotal: number = 0;
    let descuento: number = 0;


    if (isNaN(compradores) || compradores < 1) {

      alert('Debe ingresar al menos un comprador.');

      return;

    }


    if (this.contadorC >= compradores) {

      alert('Ya se procesaron todos los compradores. Presione Salir para una nueva compra.');

      return;

    }


    if (this.nombre == '') {

      alert('Debe ingresar el nombre del comprador.');

      return;

    }


    if (isNaN(boletas) || boletas < 1) {

      alert('Debe ingresar al menos una boleta.');

      return;

    }


    if (boletas > 7) {

      alert('No puede comprar más de 7 boletas por persona.');

      return;

    }


    subtotal = boletas * precio;


    if (boletas > 5) {

      descuento = subtotal * 0.15;

    } else if (boletas >= 3 && boletas <= 5) {

      descuento = subtotal * 0.10;

    } else {

      descuento = 0;

    }

    this.valorP = subtotal - descuento;

    if (this.tarjeta == 'si') {

      this.valorP =
        this.valorP - (this.valorP * 0.10);

    }

    if (boletas > this.cantidadMax) {

      this.cantidadMax = boletas;

      this.nombreMax = this.nombre;

    }

    this.contadorC++;

    if (this.contadorC == compradores) {

      alert(
        'La persona con mayor cantidad de boletas es ' +
        this.nombreMax +
        ' con un total de ' +
        this.cantidadMax +
        ' boletas'
      );

    }

    this.nombre = '';
    this.cantidadB = '';
    this.tarjeta = '';

  }


  limpiar(): void {

    this.nombre = '';
    this.cantidadC = '';
    this.cantidadB = '';
    this.tarjeta = '';

    this.valorP = 0;

    this.contadorC = 0;

    this.nombreMax = '';
    this.cantidadMax = 0;

  }
}
