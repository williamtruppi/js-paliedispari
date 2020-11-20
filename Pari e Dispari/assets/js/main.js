//acquisisco le scelte dell'utente
var userChoice = prompt("Ciao Player1: scegli pari o dispari").toLowerCase();
console.log(userChoice);
var userNumber = Number(prompt("scegli un numero da 1 a 5"));
console.log(userNumber);

/**
 * Funzione che genera un numero randomico compreso tra 
 * 1 (incluso) e 5(escluso)
 * @param {*} min 
 * @param {*} max 
 * @returns restituisce una variabile contenente il numero casuale generato 
 */
function getRandomNumber(min, max) {
  rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return rndNumber;
}

// richiamo la funziona e stampo il numero casuale
var cpuNumber = getRandomNumber(1, 5);
console.log(cpuNumber);

//effettuo la somma tra il numero dell'utente e quello generato casualmente
var sum = cpuNumber + userNumber;
console.log(sum);

//dichiaro una variabile che conterrà il risultato del gioco
var message;

/** Funziona che svolge il controllo sul risultato della somma
 * se pari e utente scegli pari --- ha vinto
 * se dispari e utente scegli pari --- ha vinto
 * se dispari e utente scegli pari --- ha perso
 * se pari e utente scegli disppari --- ha perso
 * @param {*} sum 
 * @returns
 */
function isEvenOrOdd (sum){
  if (sum % 2 == 0 && userChoice === "pari"){
    message = "il risultato è PARI ---> HAI VINTO!!";
  } else if (sum % 2 != 0 && userChoice === "dispari") {
    message = "il risultato è DISPARI ---> HAI VINTO!!";
  } else if (sum % 2 != 0 && userChoice === "pari") {
    message = "il risultato è DISPARI ---> HAI PERSO!!";
  } else if (sum % 2 == 0 && userChoice === "dispari") {
    message = "il risultato è PARI ---> HAI PERSO!!";
  }

  return message;
}

// invoco la funzione e stampo il risultato
var gameResult = isEvenOrOdd (sum);
console.log(gameResult);