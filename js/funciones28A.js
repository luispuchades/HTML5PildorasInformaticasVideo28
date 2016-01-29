///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS III
 * Origin: Video28.html ==> Degradados Lineales y Radiales
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var degradado,
        lienzo;
    //DEGRADADOS EN CANVAS
    //1. Indicamo que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Creamos el degradado para el canvas (aun no es visible)
//    degradado = lienzo.createRadialGradient(250,250,50,500,250,150,300);
    degradado = lienzo.createRadialGradient(250,150,50,250,150,300);
    //3. Indicamos los colores de origen y de fin
    degradado.addColorStop(0,"red");
    degradado.addColorStop(1,"green");
    //4. Aplicamos los colores al canvas (aun no es visible)
    //   Solo es visible si dibujamos una figura en el canvas
    lienzo.fillStyle = degradado;
    //5. Dibujamos una figura en el canvas para visualizar el degradado
    //   Ya es visible
    lienzo.fillRect(0,0,500,300);
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', cargarDocumento, false);
