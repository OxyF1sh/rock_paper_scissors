let playerScore = 0;
let computerScore = 0;
const winner = document.querySelector("#winner");
const retry = document.querySelector("#retry-btn");
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock"){
    return computerSelection == "Rock" ? "Tie" : computerSelection == "Paper" ? "You lose" : "You win";
  }
  if (playerSelection.toLowerCase() === "paper"){
    return computerSelection == "Rock" ? "You win" : computerSelection == "Paper" ? "Tie" : "You lose";
  }
  if (playerSelection.toLowerCase() === "scissors"){
    return computerSelection == "Rock" ? "You lose" : computerSelection == "Paper" ? "You win" : "Tie";
  }
}
function randomChoice(){
    return Math.floor(Math.random()*3);
}
function computerPlay(){
    let choice = randomChoice();
    return choice == 0 ? "Rock" : choice == 1 ? "Paper" : "Scissors";
    
}
function updateScore(){
  const playerSc = document.querySelector("#player")
  const computerSc = document.querySelector("#computer")
  playerSc.textContent = "Player: " + playerScore;
  computerSc.textContent = "Computer: " + computerScore;
}

function game(playerSelect){
    const playerSelection = playerSelect;
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection)
    if(roundResult === "You win"){
      playerScore++;
    }
    if (roundResult === "You lose"){
      computerScore++;
    }
    
    winner.textContent = roundResult;
    console.log(roundResult);
    updateScore();
}
function checkWinner(){
    if (playerScore > computerScore){
        return "player";
    }
    else if (computerScore > playerScore) return "computer";
    else return "tie";
}



const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {

  
  button.addEventListener('click', () => {
    game(button.id);
    if (playerScore === 5 || computerScore === 5){
      finishGame();
      
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});

function finishGame(){
    let gameWinner = checkWinner();
    if (gameWinner === "player" || gameWinner === "computer"){
      winner.textContent = "This winner is the " + gameWinner;
    }
    else winner.textContent = "The game is a " + gameWinner;

    
    retry.hidden = false;
}

retry.addEventListener('click', () => {
    retry.hidden = true;
    playerScore = 0;
    computerScore = 0;
    updateScore(); 
    buttons.forEach((button) => {button.disabled = false;});
    
});