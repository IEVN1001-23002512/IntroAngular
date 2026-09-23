import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {
  frase: string = '';
  voc: string = '';
  cons: string = '';
  numvoc: number = 0;
  numcons: number = 0;
  mensaje: string = '';

    analizar(): void {

        let arreglof: string[] = [];
        let arreglov: string[] = ['a', 'e', 'i', 'o', 'u'];
        let arregloc: string[] = [
            'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v',
            'w', 'x', 'y', 'z'
        ];

        let mayusculas: string[] = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q',
            'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        let minusculas: string[] = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
            'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];

        this.voc = '';
        this.cons = '';
        this.numvoc = 0;
        this.numcons = 0;
        this.mensaje = '';

        let cantidadCaracteres: number = 0;

        for (let caracter of this.frase) {

            if (caracter != ' ') {

                for (let i = 0; i < 27; i++) {

                    if (caracter == mayusculas[i]) {
                        caracter = minusculas[i];
                    }

                }

                arregloFrase[cantidadCaracteres] = caracter;

                cantidadCaracteres++;

                let esVocal: boolean = false;

                for (let vocal of arregloVocales) {

                    if (caracter == vocal) {
                        esVocal = true;
                    }

                }

                if (esVocal == true) {

                    this.numeroVocales++;
                    this.vocales = this.vocales + caracter;

                } else {

                    let esConsonante: boolean = false;

                    for (let consonante of arregloConsonantes) {

                        if (caracter == consonante) {
                            esConsonante = true;
                        }

                    }

                    if (esConsonante == true) {

                        this.numeroConsonantes++;
                        this.consonantes = this.consonantes + caracter;

                    }

                }

            }

        }

        let esPalindromo: boolean = true;

        for (let i = 0; i < cantidadCaracteres; i++) {

            if (arregloFrase[i] != arregloFrase[cantidadCaracteres - 1 - i]) {

                esPalindromo = false;

            }

        }

        if (esPalindromo == true) {

            this.mensaje = 'La cadena es un palíndromo.';

        } else {

            this.mensaje = 'La cadena no es un palíndromo.';

        }

    }
}
