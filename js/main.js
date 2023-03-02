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
function myAppend(containerElement, htmlElement) {
    containerElement.append(htmlElement);
}

// Definisco una funzione per aggiungere una classe a un elemento html
function myAddClass(htmlElement, className) {
    htmlElement.classList.add(className);
}

/***********
 * Main
 */

// Definisco delle variabili in cui salvo la board e il bottone
const board = document.querySelector('.board');
const playButton = document.querySelector('.play-button');
const selectInput = document.getElementById('level');

// Definisco una variabile con il numero di elementi
let cellNumber = 0;

playButton.addEventListener('click', function () {
    const level = selectInput.value;
    let levelClass;

    if (level === 'hard') {
        cellNumber = 100;
        levelClass = 'hard';
    } else if (level === 'medium') {
        cellNumber = 81;
        levelClass = 'medium';
    } else {
        cellNumber = 49;
        levelClass = 'easy';
    }

    // Creo un document fragment
    let fragment = document.createDocumentFragment();
    // Creo gli elementi e li aggiungo al frammento
    for (let i = 1; i <= cellNumber; i++) {
        const createdElement = myCreateElement('div', 'cell', i);
        myAddClass(createdElement, levelClass);
        createdElement.addEventListener('click', function() {
            myAddClass(createdElement, 'cell-onclick');
            console.log(createdElement.innerText);
        });
        myAppend(fragment, createdElement);
    }
    // Aggiungo il frammento alla board
    myAppend(board, fragment);
});

