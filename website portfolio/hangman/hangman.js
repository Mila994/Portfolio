let languages = ["javascript", "csharp", "python", "java", "php"];
let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

document.getElementById("maxWrong").innerHTML = maxWrong;

function randomWord() {
  answer = languages[Math.floor(Math.random() * languages.length)];
  generateButtons();
  guessedWord();
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` +
        letter +
        `'
          onClick="handleGuess('` +
        letter +
        `')"
        >
          ` +
        letter +
        `
        </button>
      `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function guessedWord() {
  wordStatus = "";
  for (let i = 0; i < answer.length; i++) {
    if (guessed.indexOf(answer[i]) >= 0) {
      wordStatus += answer[i];
    } else {
      wordStatus += " _ ";
    }
  }
  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function handleGuess(chosenLetter) {
  if (guessed.indexOf(chosenLetter) === -1) {
    guessed.push(chosenLetter);
    document.getElementById(chosenLetter).setAttribute("disabled", true);
  }
  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
  } else {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

//function checkIfGameWon() {
  //if (wordStatus === answer) {
   // document.getElementById("keyboard").innerHTML = "You Won!!!";
 // }
//}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
    document.getElementById("resetBtn").classList.remove("d-none");
  }
}


function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The answer was: " + answer;
    document.getElementById("keyboard").innerHTML = "You Lost!!!";
  }
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "images/0.jpg";

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

randomWord(); 


