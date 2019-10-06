

let guessLetters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// //let userGuess = "";
// let randomLet = "";
// let blank = 0;
let charOfGuess = [];
let numOfRemGuess = 7;
// let userInput = "";
let wins = 0;
let loss = 0;

let numberOfWins = document.querySelector("#numberOfWins");
let numberOfLosses = document.querySelector("#numberOfLosses");
let typedGuesses = document.querySelector("#typedGuesses");
let userWordGuess = document.querySelector("#userWordGuess");
let remainGuess = document.querySelector("#hints");


function start() {
    for (var i = 0; i < guessLetters.length; i++) {
        charOfGuess[i] = "_";
        }
}
 
function restart() {
    charOfGuess = [];
    numOfRemGuess = 7;
    computerGuess = guessLetters[Math.floor(Math.random() * guessLetters.length)];
}
restart();

document.onkeyup = function(event) {
     let userGuess = event.key;

     if(userGuess === computerGuess) {
    wins++;
    restart();
}   else if (userGuess !== computerGuess) {
    numOfRemGuess--;
    charOfGuess.push(userGuess);
    console.log(userGuess);
        if (numOfRemGuess === 0 || numOfRemGuess < 1) {
            loss++;
            document.querySelector("#hints").innerHTML = "Thanks for Playing!";
            restart();
        }
        numberOfWins.innerHTML = wins;
        numberOfLosses.innerHTML = loss;
        typedGuesses.innerHTML = charOfGuess;
        userWordGuess.innerHTML = userGuess;
        remainGuess.innerHTML = "Remaining Guesses: " + numOfRemGuess;
    
}};
//start();
restart();