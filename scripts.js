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

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#result');
let playerSelection = 'default'

//maybe something up here called inProgress if true then when we click it just updates the playerselectoin
//if false it starts a new game?

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        //computerSelection = computerPlay();
        playerSelection = e.target.id;
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
        //console.log(playerSelection);
        //result = playRound(playerSelection, computerSelection);
        //resultDiv.textContent = result;
    });
});

//Display the running score
function game() {
    //set score
    playerScore = 0;
    computerScore = 0;

    result = 
}


//announce a winner of the game once one player reaches 5 points.