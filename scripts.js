function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    let computerSelection = '';
    if (number === 0) {
        computerSelection = 'rock';
    } else if (number === 1) {
        computerSelection = 'paper';
    } else if (number === 2 ) {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

function userPlay() {
    let playerSelection = '';
    let keepGoing = true;
    while (keepGoing == true) {
        playerSelection = prompt('Choose: (R)ock, (P)aper or (S)cissors');
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
            keepGoing = false;
        } else if (playerSelection === 'r' || playerSelection === 'p' || playerSelection === 's') {
            if (playerSelection === 'r') {
                playerSelection = 'Rock';
            } else if (playerSelection === 'p') {
                playerSelection = 'Paper';
            } else if (playerSelection === 's') {
                playerSelection = 'Scissors';
            }
            keepGoing = false;
        } else {
            alert('Try again, must be (R)ock, (P)aper or (S)cissors');
        }
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    let computerWin = `You Lose! ${computerSelection} beats ${playerSelection}`

    let playerWin = `You Win! ${playerSelection} beats ${computerSelection}`

    if (playerSelection === computerSelection) {
        return("It's a tie!")
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return computerWin;
        } else if (computerSelection === 'scissors') {
            return playerWin;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return playerWin;
        } else if (computerSelection === 'scissors') {
            return computerWin;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return playerWin;
        } else if (computerSelection === 'rock') {
            return computerWin;
        }
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        computerSelection = computerPlay()
        result = playRound(e.target.id, computerSelection);
        console.log(result);
    });
});

