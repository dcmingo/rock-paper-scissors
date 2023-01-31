console.log("Hello World");

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice () {
    let n = Math.floor(Math.random() * 3);
    if (n == 0) {
        return "rock";
    }
    else if (n == 1) {
        return "paper";
    }
    return "scissors";
}

// console.log(getComputerChoice())

function playRound(playerChoice, computerChoice) {
    let p = playerChoice.toLowerCase();
    let c = computerChoice.toLowerCase();
    console.log(p);
    console.log(c);
    if (p == c) {
        return "Same! Play again!"
    }
    else if (p == "rock") {
        if (c == "paper") {
            return "Paper beats rock, you lose"
        }
        return "Rock beats scissors, you win!"
    }
    else if (p == "paper") {
        if (c == "scissors") {
            return "Scissors beats paper, you lose"
        }
        return "Paper beats rock, you win!"
    }
    else if (p == "scissors") {
        if (c == "rock") {
            return "Rock beats scissors, you lose"
        }
        return "Scissors beats paper, you win!"
    }
}



 
function game(e) {
        console.log(e.target.id);
    //for(let i = 0; i<5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = e.target.id;
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        switch (result) {
            case "Same! Play again!":
                
                break;
            case "Rock beats scissors, you win!":
            case "Paper beats rock, you win!":
            case "Scissors beats paper, you win!":
                playerPoints = playerPoints + 1;
                break;
            default:
                computerPoints = computerPoints + 1;
            
        }
        let pC = document.getElementById('PlayerChoice');
        let cC = document.getElementById('ComputerChoice');
        pC.innerHTML = 'Player: ' + playerChoice;
        cC.innerHTML = 'Computer: ' + computerChoice;


        let pS = document.getElementById('PlayerScore');
        let cS = document.getElementById('ComputerScore');
        pS.innerHTML = 'Player Score: ' + playerPoints;
        cS.innerHTML = 'Computer Score: ' + computerPoints;

        
   // }
        
    let resultDiv = document.getElementById('Result');
    if (playerPoints == 5) {
        resultDiv.innerHTML = "You win!";
    }
    else if (computerPoints == 5) {
        resultDiv.innerHTML = "You lose :(";
    }


}

const rockBtn = document.getElementById('Rock');
console.log(rockBtn);


const buttons = Array.from(document.querySelectorAll('.btn'));
console.log(buttons)
buttons.forEach(button => button.addEventListener('click',game));

const pChoice = "rock";
const cChoice = getComputerChoice();

//game()