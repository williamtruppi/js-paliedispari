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
  min = Math.ceil(min);
  max = Math.floor(max);
  rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return rndNumber
}

var cpuNumber = getRandomNumber(1, 5);
console.log(cpuNumber);