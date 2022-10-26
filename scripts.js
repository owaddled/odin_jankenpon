function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    let computerSelection = '';
    if (number === 0) {
        computerSelection = 'Rock';
    } else if (number === 1) {
        computerSelection = 'Paper';
    } else if (number === 2 ) {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let computerWin = `You Lose! ${computerSelection} beats ${playerSelection}`

    let playerWin = `You Win! ${playerSelection} beats ${computerSelection}`

    if (playerSelection === computerSelection) {
        return("It's a tie!")
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore++
            return computerWin;
        } else if (computerSelection === 'Scissors') {
            playerScore++
            return playerWin;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            playerScore++
            return playerWin;
        } else if (computerSelection === 'Scissors') {
            computerScore++
            return computerWin;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            playerScore++
            return playerWin;
        } else if (computerSelection === 'Rock') {
            computerScore++
            return computerWin;
        }
    }
}

function gameReset() {
    playerScore = 0;
    computerScore = 0;
    newGame = true;
}

function theGame(e) {
    if (newGame) {
        newGame = false;
        textDiv.removeChild(gameResult);
    }
    computerSelection = computerPlay();
    playerSelection = e.target.id;
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    result = playRound(playerSelection, computerSelection);
    score = `Your Score: ${playerScore} - Computer Score: ${computerScore}`;
    scoreDiv.textContent = score;
    if (playerScore == 5) {
        //change this to create and add a div called Game result between result and score, game reset will remove it
        resultDiv.textContent = result;
        gameResult.textContent = 'First to 5! You beat the computer!';
        textDiv.insertBefore(gameResult, scoreDiv);
        gameReset();
    } else if (computerScore == 5) {
        resultDiv.textContent = result;
        gameResult.textContent = 'First to 5! The computer beat you!';
        textDiv.insertBefore(gameResult, scoreDiv);
        gameReset();   
    } else {
        resultDiv.textContent = result;
        }
    }

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const gameResult = document.createElement('div')
const textDiv = document.querySelector(".text")
let newGame = false;
let playerSelection = '';
let playerScore = 0;
let computerScore = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => theGame(e))
});