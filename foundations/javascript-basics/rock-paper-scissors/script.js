function game() {
    var a = 0;
    var b = 0;
    for (i = 0; i < 5 ; i++) {
        function playerChoice() {
            let ask = prompt('Rock, Paper, or Scissors?').toLowerCase();
            console.log(ask)
            return ask;
        }
        let playerSelection = playerChoice();
        
        function computerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const random = Math.floor(Math.random() * choices.length);
            console.log(choices[random]);
            return choices[random];
        }
        let computerSelection = computerChoice();
        
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return 'Draw!'
            } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
                a++;
                return 'You won!'
            } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
                b++;
                return 'You lose!'
            }  
        };
        console.log(playRound(playerSelection, computerSelection));
    }
    if (a === b) {
        console.log('DRAW!')
    } else if (a > b) {
        console.log('Player won!')
    } else if (b > a) {
        console.log('Player lost!')
    }
}

game();