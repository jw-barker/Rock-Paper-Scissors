function getComputerChoice () {
    const pick = ['Rock' , 'Paper' , 'Scissors']
    return pick[Math.floor(Math.random () * pick.length)];
}

// let result = getComputerChoice(1, 3);

//     if (result === 1){
//     console.log("Rock")
//    } 
//    else if (result === 2){
//     console.log("Paper")
//    }
//    else {
//     console.log("Scissors")
//    }

function getHumanChoice() {
    var choice = prompt("Make your move!" , "Rock, Paper or Scissors")

   }


let humanScore = 0
let computerScore = 0

function playRound(humanSelection, computerSelection) {

    if (humanSelection === computerSelection) {
        return `It's a draw! you both picked ${humanSelection}`;

    } 
    
    else if (humanSelection === "Rock" && computerSelection === "Scissors") {
        return `You win! ${humanSelection} beats ${computerSelection}`;

    } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
        return `You win! ${humanSelection} beats ${computerSelection}`;
    } 
    else if (humanSelection === "Paper" && computerSelection === "Rock") {
        return `You win! ${humanSelection} beats ${computerSelection}`;
    }

    else {
    return `You lose! ${computerSelection} beats ${humanSelection}`;

    }
 

    // if (computerSelection === "Rock" && humanSelection === "Paper") {
    //     return("You win!")
    // }
    // else if (computerSelection === "Rock" && humanSelection === "Scissors") {
    //     return("You Lose!")
    // }
    // else {
    //     return("It's a draw, try again!")
    // }
    
}

console.log(playRound);

const humanSelection = prompt("Make your move!" , "Rock, Paper or Scissors")
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));