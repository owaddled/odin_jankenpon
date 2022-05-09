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


//Write a NEW function called game().
function game() {
    //set score
    let playerScore = 0;
    let computerScore = 0;

    // Call the playRound function inside of this one to play a 5 round game 
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = userPlay();
        result = playRound(playerSelection, computerSelection)
        //console.log() to display the results of each round
        console.log(result)

        //incrementing score
        if (result[4] === 'W') {
            playerScore++
        } else if (result[4] === 'L') {
            computerScore++;
        }
    }

    //console.log() reports a winner or loser at the end.
    function gameResult() {
        const playerWinGame = `You beat the computer! Your score: ${playerScore}. Computer score: ${computerScore}`;
        const computerWinGame = `You lost to the computer! Your score: ${playerScore}. Computer score: ${computerScore}`;
        const tieGame = `It's a tie! Your score: ${playerScore}. Computer score: ${computerScore}`;

        if (playerScore > computerScore) {
            return playerWinGame;
        } else if  (computerScore > playerScore) {
            return computerWinGame;
        } else if (playerScore === computerScore) {
            return tieGame;
        }
    }

    const gameWinner = gameResult();
    console.log(gameWinner);
}

game();
