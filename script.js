function getComputerChoice () {
    const pick = ['Rock' , 'Paper' , 'Scissors']
    return pick[Math.floor(Math.random () * pick.length)];
}

let humanScore = 0
let computerScore = 0

 
function playRound(humanSelection, computerSelection) {

    
        if (humanSelection === computerSelection) {
            return `It's a draw! you both picked ${humanSelection}`;
    
        } 
        
        else if (humanSelection === "Rock" && computerSelection === "Scissors") {
            humanScore++;
            return `You win! ${humanSelection} beats ${computerSelection}`;
             
    
        } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
            humanScore++;
            return `You win! ${humanSelection} beats ${computerSelection}`;
            
        } 
        else if (humanSelection === "Paper" && computerSelection === "Rock") {
            humanScore++;
            return `You win! ${humanSelection} beats ${computerSelection}`;
            
        }
    
        else {
            computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}`;
        
    
        }
 
    }

    function playGame(){
        while (humanScore <5 && computerScore <5) {
            const humanSelection = prompt("Make your move!" , "Rock, Paper or Scissors")
            const computerSelection = getComputerChoice();

            console.log(playRound(humanSelection, computerSelection));

        }
 
    }

console.log(humanScore);

playGame();

if (humanScore === 5) {
    console.log("You win!");
} else {
    console.log("Computer wins!");
}