let playerChoice = prompt("Rock, paper, scissors?");
let computerChoice = Math.floor(Math.random() * 3) + 1;
let playerScore = 0;
let computerScore = 0;

// Round 1
getComputerChoice(computerChoice);
playRound(playerChoice, computerChoice);
game(playerScore, computerScore);

// Round 2
playerChoice = prompt("Rock, paper, scissors?");
computerChoice = Math.floor(Math.random() * 3) + 1;
getComputerChoice(computerChoice);
playRound(playerChoice, computerChoice);
game(playerScore, computerScore);

// Round 3
playerChoice = prompt("Rock, paper, scissors?");
computerChoice = Math.floor(Math.random() * 3) + 1;
getComputerChoice(computerChoice);
playRound(playerChoice, computerChoice);
game(playerScore, computerScore);

// Round 4
playerChoice = prompt("Rock, paper, scissors?");
computerChoice = Math.floor(Math.random() * 3) + 1;
getComputerChoice(computerChoice);
playRound(playerChoice, computerChoice);
game(playerScore, computerScore);

// Round 5
playerChoice = prompt("Rock, paper, scissors?");
computerChoice = Math.floor(Math.random() * 3) + 1;
getComputerChoice(computerChoice);
playRound(playerChoice, computerChoice);
game(playerScore, computerScore);
finalScore(playerScore, computerScore);


function getComputerChoice(number) {
    if (number == 1) {
        console.log("Computer chose Rock");
        computerChoice = "Rock";
        return computerChoice;
    } else if (number == 2) {
        console.log("Computer chose Paper");
        computerChoice = "Paper";
        return computerChoice;
    } else {
        console.log("Computer chose Scissors");
        computerChoice = "Scissors";
        return computerChoice;
    }
}

function playRound(rps, cs) { 
    // rps = Rock, Paper or Scissors & cs = computerChoice
    if (rps.toLowerCase() == cs.toLowerCase()) {
        console.log("It's a tie");
    } else if (rps.toLowerCase() == "rock" && cs.toLowerCase() == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
        return computerScore;
    } else if (rps.toLowerCase() == "rock" && cs.toLowerCase() == "scissors") {
        console.log("You win! Rock beats Scissors");
        playerScore += 1;
        return playerScore;
    } else if (rps.toLowerCase() == "paper" && cs.toLowerCase() == "rock") {
        console.log("You win! Paper beats Rock");
        playerScore += 1;
        return playerScore;
    } else if (rps.toLowerCase() == "paper" && cs.toLowerCase() == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
        return computerScore;
    } else if (rps.toLowerCase() == "scissors" && cs.toLowerCase() == "paper") {
        console.log("You win! Scissors beats Paper");
        playerScore += 1;
        return playerScore;
    } else if (rps.toLowerCase() == "scissors" && cs.toLowerCase() == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
        return computerScore;
    }
}

function game(score1, score2) {
    console.log("Player Score: " + score1);
    console.log("Computer Score: " + score2);
}

function finalScore(score1, score2) {
    if (score1 == score2) {
        console.log("It's a draw! You both have " + score1 + " points.");
    } else if (score1 > score2) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}


