//acquisisco la parola col prompt
var userWord = prompt("Inserisci una parola");
console.log(userWord);
console.log(userWord.length);

//converto la stringa in un array di caratteri
var testWordArray = userWord.split('');
console.log(testWordArray, testWordArray.length);

var testWord;

function palindromeWordCheck (word){
  for (i = testWordArray.length; i > testWordArray.length; i--)
  testWord += testWordArray[i];
  return word;
}

var wordCheck = palindromeWordCheck(userWord);
console.log(wordCheck);
console.log("la testword è " + testWord);

if (userWord === wordCheck){
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}

