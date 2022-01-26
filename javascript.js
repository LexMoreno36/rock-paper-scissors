const options = ["Rock", "Paper", "Scissors"];
const maxGames = 20;
var i = 0;

var playerSelection; 
var computerSelection;

var humanCounter = 0;
var computerCounter = 0;


function computerPlay(){
    return options[Math.floor(Math.random()*3)];
}

function playGame(){
    while(humanCounter < 5 & computerCounter < 5 & i < maxGames){
        i++
        playerSelection = prompt("Enter: Rock, Paper or Scissors.");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if(computerCounter == 5){
        console.log("Computer dominates de world");
    }
    else{console.log("Humans dominate de world")}
}

function playRound(pSelect, cSelect){
    pSelect = pSelect.toUpperCase();
    cSelect = cSelect.toUpperCase();
    let areEqual = pSelect === cSelect;
    if (areEqual){

        console.log("tie");
    }
    else if (pSelect === "ROCK" & cSelect === "PAPER"){
        computerCounter++;
        console.log("Computer wins, paper beats rock");
    }
    else if (pSelect === "PAPER" & cSelect === "SCISSORS"){
        computerCounter++;
        console.log("Computer wins, scissors beat paper");
    }
    else if (pSelect === "SCISSORS" & cSelect === "ROCK"){
        computerCounter++;
        console.log("Computer wins, rock beats scissors");
    }
    else if (pSelect === "PAPER" & cSelect === "ROCK"){
        humanCounter++;
        console.log("Human wins, paper beats rock");
    }
    else if (pSelect === "SCISSORS" & cSelect === "PAPER"){
        humanCounter++;
        console.log("Human wins, scissors beat paper");
    }
    else if (pSelect === "ROCK" & cSelect === "SCISSORS"){
        humanCounter++;
        console.log("Human wins, rock beats scissors");
    }
    else{console.log("WTF just happened")}
}

console.log(playGame(playerSelection, computerSelection));