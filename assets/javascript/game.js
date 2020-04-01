let guessLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// //let userGuess = "";
// let randomLet = "";
// let blank = 0;
let charOfGuess = [];
let numOfRemGuess = 7;
// let userInput = "";
let wins = 0;
let loss = 0;

let container = document.querySelector(".container");

let gameHTML = `
<div class="row border m-3">
      <div class="col-sm pt-3">
        <h2>Here's The Test</h2>
        <h4>The Rules:</h4>
        <p class="lead">
          Use the keyboard to guess the letter! Your number of guesses are
          limited so be wise and have fun!
        </p>

        <p class="text-muted">(To restart game and score, refresh page.</p>
      </div>
      <div class="col-sm">
        <img
          id="fresh-gif"
          width="100%"
          height="100%"
          src="https://media1.giphy.com/media/xT9IgFlWsUMDFzVIu4/giphy.webp"
          alt="Willy Wonka gif"
        />
      </div>
    </div>

    <div class="row text-center">
      <div class="col-sm-7">
        <h3 class="text-center border-bottom">Let's Play!</h3>
        <div class="pb-5" id="hints"></div>
        <div class="word-container" height="auto">
          <h3 id="userWordGuess"></h3>
        </div>
        <div class="word-container-2" height="auto">
          <h4 id="correct"></h4>
        </div>
      </div>
      <div class="col-sm-5 text-center border-left border-dark">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Typed Guesses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4" id="typedGuesses"></td>
            </tr>
          </tbody>
        </table>
        <table class="table table-bordered" id="result">
          <thead>
            <tr>
              <th scope="col">Number of Wins</th>
              <th scope="col">Number of Losses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4" id="numberOfWins"></td>
              <td class="p-4" id="numberOfLosses"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
`;

const myFragment = document.createRange().createContextualFragment(gameHTML);
console.log(myFragment);
container.appendChild(myFragment);

let numberOfWins = document.querySelector("#numberOfWins");
let numberOfLosses = document.querySelector("#numberOfLosses");
let typedGuesses = document.querySelector("#typedGuesses");
let userWordGuess = document.querySelector("#userWordGuess");
let remainGuess = document.querySelector("#hints");
const img = document.querySelector("#fresh-gif");

function start() {
  //   for (var i = 0; i < guessLetters.length; i++) {
  //     charOfGuess[i] = "_";
  //   }
  console.log("Started!");
  charOfGuess = [];
  numOfRemGuess = 7;
  computerGuess = guessLetters[Math.floor(Math.random() * guessLetters.length)];
}
start();

function restart() {
  console.log("restarted!");
  charOfGuess = [];
  numOfRemGuess = 7;
  computerGuess = guessLetters[Math.floor(Math.random() * guessLetters.length)];
  //   img.src = "https://media1.giphy.com/media/xT9IgFlWsUMDFzVIu4/giphy.webp";
}
//restart();

document.onkeyup = function(event) {
  let userGuess = event.key;

  if (userGuess === computerGuess) {
    wins++;
    img.src = "https://media.giphy.com/media/yoJC2JaiEMoxIhQhY4/giphy.gif";
    restart();
  } else if (userGuess !== computerGuess) {
    numOfRemGuess--;
    charOfGuess.push(userGuess);
    console.log(userGuess);
    if (numOfRemGuess === 0 || numOfRemGuess < 1) {
      loss++;
      document.querySelector("#hints").innerHTML = "Thanks for Playing!";
      img.src = "https://media.giphy.com/media/EndO2bvE3adMc/giphy.gif";
      setTimeout(restart(), 3000);
    }
    numberOfWins.innerHTML = wins;
    numberOfLosses.innerHTML = loss;
    typedGuesses.innerHTML = charOfGuess;
    userWordGuess.innerHTML = userGuess;
    remainGuess.innerHTML = "Remaining Guesses: " + numOfRemGuess;
  }
};
