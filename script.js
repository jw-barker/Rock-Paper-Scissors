function getComputerChoice (min, max) {
   return Math.floor(Math.random () * (max - min + 1) + min);

}

let result = getComputerChoice(1, 3);

    if (result === 1){
    console.log("Rock")
   } 
   else if (result === 2){
    console.log("Paper")
   }
   else {
    console.log("Scissors")
   }

   function getHumanChoice () {
    let choice = prompt("Make your move!" , "Rock, Paper or Scissors")

    console.log(choice)
   }

getHumanChoice();