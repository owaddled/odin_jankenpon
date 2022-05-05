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

computerPlay();

function userPlay() {
    let playerSelection = prompt('Choose: (R)ock, (P)aper or (S)cissors')
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
        return playerSelection;
    } else if (playerSelection === 'r' || playerSelection === 'p' || playerSelection === 's') {
        if (playerSelection === 'r') {
            playerSelection = 'Rock';
        } else if (playerSelection === 'p') {
            playerSelection = 'Paper';
        } else if (playerSelection === 's') {
            playerSelection = 'Scissors';
        }
        return playerSelection;
    } else {
        alert('Try again, must be (R)ock, (P)aper or (S)cissors');
    }
}

function playRound(playerSelection, computerSelection) {
    let computerWin = `You Lose! ${computerSelection} beats ${playerSelection}`

    let playerWin = `You Win! ${playerSelection} beats ${computerSelection}`

    if (playerSelection === computerSelection) {
        return("It's a tie!")
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return computerWin;
        } else if (computerSelection === 'Scissors') {
            return playerWin;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return playerWin;
        } else if (computerSelection === 'Scissors') {
            return computerWin;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return playerWin;
        } else if (computerSelection === 'Rock') {
            return computerWin;
        }
    }
}

const computerSelection = computerPlay();
const playerSelection = userPlay();

console.log(playRound(playerSelection, computerSelection));