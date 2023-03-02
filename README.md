# Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

***

1. Costruisco l'interfaccia e la board statiche 

2. Definisco delle variabili in cui salvo la board e il bottone

3. Definisco una funzione per generare le celle, assegnare una classe e stamparne il numero 

4. Definisco una funzione per aggiungere le celle alla board 

5. Aggiungo l'evento per creare le celle al click del bottone

6. Definisco la classe per colorare le celle e aggiungo un evento onclick alle celle

## Bonus 

7. Inserisco un input select nella pagina per scegliere il livello

8. Definisco classi css per avere una diversa divisione della board per ogni livello di difficoltà

9. Salvo l'input select in una variabile

10.  Imposto la variabile cellNumber = 0 nello scope globale 

11. All'interno dell'evento onclick del bottone play leggo il valore del select input e creo delle condizioni in cui assegno alla variabile cellNumber il valore relativo

12. Definisco una variabile per la classe livello a cui assegno le diverse classi css a seconda dell'input select