var choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
    player:0,
    computer:0
}

function play(e){
    restart.style.display='inline-block';
    const playerChoice =e.target.id;
    const computerChoice = getComputerChoice();
    //console.log(playerChoice,computerChoice)
    const winner = getWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice);
}

//computer choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    } else if(rand <=0.67){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//restart game
function restartGame(e){
   
scoreBoard.player=0;
scoreBoard.computer=0;
score.innerHTML = ` 
<p>Player:${scoreBoard.player}</p>
<p>Computer:${scoreBoard.computer}</p>
`;
}


//get Game winner 
function getWinner(playerChoice,computerChoice){
if(playerChoice === computerChoice){
    return "draw";
} else if(playerChoice === 'rock'){
if(computerChoice === 'paper'){
    return 'computer';
} else {
    return "player";
}}else if(playerChoice === 'paper'){
    if(computerChoice === 'scissors'){
        return 'computer';
    } else {
        return 'player';
    }
} else if(playerChoice === 'scissors'){
    if(computerChoice === 'rock'){
        return 'computer'
    } else {
        return 'player'
    }
}
}

//get Score
function showWinner(winner, computerChoice){
if(winner === 'player'){
    scoreBoard.player++;
    result.innerHTML =
    `<h1 class="text-win">You win</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose ${computerChoice}</p>
    `;
    
} else if(winner === 'computer'){
    scoreBoard.computer++;
    result.innerHTML = `<h1 class="text-lose">You lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose ${computerChoice}</p>
    `;
} else {
    result.innerHTML =
    `<h1 class="text-win">It's a draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose ${computerChoice}</p>
    `;
} 

score.innerHTML = `<p>Player: ${scoreBoard.player}</p>
<p> Computer: ${scoreBoard.computer}</p>
`;

modal.style.display='block'
}

//Clear Modal
function clearModal(e){
    if(e.target === modal){
        modal.style.display='none';
    }
}

//event listener

choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame)
window.addEventListener('click',clearModal);