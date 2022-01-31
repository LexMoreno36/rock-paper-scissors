const options = ["Rock", "Paper", "Scissors"];
const maxGames = 20;
var i = 0;

var playerSelection;
var computerSelection;

var humanCounter = 0;
var computerCounter = 0;
computerSelection = computerPlay();

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(pSelect, cSelect) {
  pSelect = pSelect.toUpperCase();
  cSelect = cSelect.toUpperCase();
  let areEqual = pSelect === cSelect;
  if (areEqual) {
    console.log("tie");
  } else if ((pSelect === "ROCK") & (cSelect === "PAPER")) {
    computerCounter++;
    computerScores.textContent = computerCounter;
  } else if ((pSelect === "PAPER") & (cSelect === "SCISSORS")) {
    computerCounter++;
    computerScores.textContent = computerCounter;
  } else if ((pSelect === "SCISSORS") & (cSelect === "ROCK")) {
    computerCounter++;
    computerScores.textContent = computerCounter;
  } else if ((pSelect === "PAPER") & (cSelect === "ROCK")) {
    humanCounter++;
    humanScores.textContent = humanCounter;

  } else if ((pSelect === "SCISSORS") & (cSelect === "PAPER")) {
    humanCounter++;
    humanScores.textContent = humanCounter;

  } else if ((pSelect === "ROCK") & (cSelect === "SCISSORS")) {
    humanCounter++;
    humanScores.textContent = humanCounter;

  } else {
  }
}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => playRound("Rock", computerPlay()));

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => playRound("Paper", computerPlay()));

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () =>
  playRound("Scissors", computerPlay())
);

const humanScores = document.querySelector("#humanScores");

const computerScores = document.querySelector("#computerScores");

