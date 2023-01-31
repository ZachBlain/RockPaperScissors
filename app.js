

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

// The player gets to choose Rock Paper or Scissors

function playSelection() {
    let choice = prompt("Choose Rock Paper or Scissors");
    if (choice.toLowerCase() == 'rock'){
        return 'rock';
    } else if(choice.toLowerCase() == 'paper'){
        return 'paper';
    }else if(choice.toLowerCase() == 'scissors'){
        return 'scissors';
    }else {
        console.log('Not a valid choice!!!')
        return playSelection();
    }
}

// Decide who wins the Rock Paper Scissors game

function playRound(player, computer) {
    switch(player) {
        case 'rock':
            if(computer === 'scissors'){
                return 'YOU WIN!!! Rock beats scissors.';
                break;
            } else if(computer === 'paper'){
                return 'YOU LOSE!!! Rock loses to paper.';
                break;
            } else {
                return 'TIE!!! Rock ties rock.';
                break;
            }
        case 'paper':
            if(computer === 'rock'){
                return 'YOU WIN!!! Paper beats rock.';
                break;
             } else if(computer === 'scissors'){
                return 'YOU LOSE!!! Paper loses to scissors.';
                break;
             } else {
                return 'TIE!!! Paper ties paper.';
                break;
             }
        case 'scissors':
            if(computer === 'paper'){
                return 'YOU WIN!!! Scissors beats paper.';
                break;
            } else if(computer === 'rock'){
                return 'YOU LOSE!!! Scissors loses to rock.';
                break;
            } else {
                return 'TIE!!! Scissors ties scissors.';
                break;
            }
    }
}


// Plays a 5 round game of Rock Paper Scissors

function game() {
    let player = 0;
    let comp = 0;
    while (comp !== 5 && player !== 5){
       let result = playRound(playSelection(), getComputerChoice());
       console.log(result);
       if (result.includes('WIN')){
            player++;
            console.log(`The score is Players ${player} to the Computers ${comp}.`)
       } else if (result.includes('LOSE')){
            comp++;
            console.log(`The score is Players ${player} to the Computers ${comp}.`)
       }
   }
   if (comp == 5){
    console.log(`The Computer wins ${comp} to ${player}.`)
   }else {
    console.log(`You win ${player} to ${comp}.`)
   }
}

game();