function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    let result = '';
    if (number === 0) {
        result = 'rock';
    } else if (number === 1) {
        result = 'paper';
    } else if (number === 2 ) {
        result = 'scissors';
    }
    console.log(result);
}

computerPlay();