'use strict';

/***********
 * Functions
 */

// Definisco una funzione per generare un elemento, aggiungere classe e contenuto=value 
function myCreateElement(htmlElement, className, htmlValue) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;
    return element;
}

// Definisco una funzione per aggiungere elemento figlio a container
function myAppendChild(containerElement, childElement) {
    containerElement.append(childElement);
}

/***********
 * Main
 */

// Definisco delle variabili in cui salvo la board e il bottone
const board = document.querySelector('.board');
const playButton = document.querySelector('.play-button');

// Definisco una variabile con il numero di elementi
let cellNumber = 100;
// Creo un document fragment
const fragment = document.createDocumentFragment();

// Creo gli elementi e li aggiungo al frammento
for (let i = 1; i <= cellNumber; i++) {
    const createdElement = myCreateElement('div', 'cell', i);
    myAppendChild(fragment, createdElement);
}
console.log(fragment);
// Aggiungo il frammento alla board
myAppendChild(board, fragment);