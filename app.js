
let result = document.querySelector(".result");
let player1 = document.querySelector('#player1');
let computer = document.querySelector('#computer');
let matchPlayer = document.querySelector('.matchPlayer');
let matchComputer = document.querySelector('.matchComputer');

let playerScore = 0;
let computerScore = 0;

//listens for clicks and calls clicked() if one occurs

document.querySelector(".rock").addEventListener('click', () => clicked('rock'));

document.querySelector(".paper").addEventListener('click', () => clicked('paper'));

document.querySelector(".scissors").addEventListener('click', () => clicked('scissors'));

document.querySelector(".restartButton").addEventListener('click', () => restartGame());


//players a round of RPS and sets result = to the outcome
function clicked(pick) {
    if(!gameOver()){
        result.textContent = playRound(pick, getComputerChoice());
    }
}


// updates the FA icons in the middle to display the last match played
function matchOutput (player, computer) {
    if (player === 'rock'){
        matchPlayer.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    }else if (player === 'paper') {
        matchPlayer.innerHTML = '<i class="fa-solid fa-hand"></i>';
    }else if (player === 'scissors'){
        matchPlayer.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    }
    if (computer === 'rock'){
        matchComputer.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    }else if (computer === 'paper') {
        matchComputer.innerHTML = '<i class="fa-solid fa-hand"></i>';
    }else if (computer === 'scissors'){
        matchComputer.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    }
}

// Generate the computers choice of Rock Paper or Scissors

function getComputerChoice (){
    num = Math.floor(Math.random() * 3 + 1);
    if (num === 1){
        return 'rock';
    } else if( num === 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}


// Decide who wins the Rock Paper Scissors game

function playRound(player, computer) {
    matchOutput(player, computer);
    switch(player) {
        case 'rock':
            if(computer === 'scissors'){
                playerScore++;
                scoreKeeper();
                if(gameOver()){
                    return whoWon();
                }
                return 'YOU WIN!!! Rock beats scissors.';
                break;
            } else if(computer === 'paper'){
                computerScore++;
                scoreKeeper();
                if(gameOver()){
                    return whoWon();
                }
                return 'YOU LOSE!!! Rock loses to paper.';
                break;
            } else {
                return 'TIE!!! Rock ties rock.';
                break;
            }
        case 'paper':
            if(computer === 'rock'){
                playerScore++;
                scoreKeeper();
                if(gameOver()){
                    return whoWon();
                }
                return 'YOU WIN!!! Paper beats rock.';
                break;
             } else if(computer === 'scissors'){
                computerScore++;
                scoreKeeper();
                if(gameOver()){
                    return whoWon();
                }
                return 'YOU LOSE!!! Paper loses to scissors.';
                break;
             } else {
                return 'TIE!!! Paper ties paper.';
                break;
             }
        case 'scissors':
            if(computer === 'paper'){
                playerScore++;
                scoreKeeper();
                if(gameOver()){
                    return whoWon();
                }
                return 'YOU WIN!!! Scissors beats paper.';
                break;
            } else if(computer === 'rock'){
                computerScore++;
                scoreKeeper();
                if(gameOver()){
                    return whoWon();
                }
                return 'YOU LOSE!!! Scissors loses to rock.';
                break;
            } else {
                return 'TIE!!! Scissors ties scissors.';
                break;
            }
    }
}

//checks if someone has a score of 5
function gameOver(){
    return (playerScore === 5 || computerScore === 5);
}

//if someone has won the game it returns the winner and score
function whoWon() {
    if (playerScore === 5){
        return `Game over! Player won ${playerScore} to ${computerScore}.`;
    }
    return `Game over! Computer won ${computerScore} to ${playerScore}`;
}


// resets score and FA icons and result text to defaults
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    matchPlayer.innerHTML = '<i class="fa-solid fa-question"></i>';
    matchComputer.innerHTML = '<i class="fa-solid fa-question"></i>';
    result.textContent = 'Choose your weapon';
    scoreKeeper();
}

//updates the score 
function scoreKeeper() {
    player1.textContent = playerScore;
    computer.textContent = computerScore;
}
