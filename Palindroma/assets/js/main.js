//acquisisco la parola col prompt

do {
  var userWord = prompt("Inserisci una parola");
} while (!isNaN(userWord))

console.log(userWord);
console.log(userWord.length);

//ribalto la parola
var testWord = userWord.split('').reverse().join('');
console.log(testWord);

//dichiaro una variabile che conterrà il messaggio del risultato
var message;

/** Funzione che effettua il controllo sulla parola
 * @param {*} word
 * 
 */
function palindromeWordCheck (word){
  if (word === userWord){
    return message = "La parola è Palindroma";
  } else {
    return message = "La parola NON è Palindroma";
  }
}

var palindromeWord = palindromeWordCheck(testWord)
console.log(palindromeWord);