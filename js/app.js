$(() => {

const changeDisplayValue = (event, selector, displayValue) => {
    const $item = $(selector);
    $item.css('display', displayValue);
    }

const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

score = {
    player: 0,
    computer: 0
}

computerMove = null;
playerChoice = null;

const moves = ["Kobe", "Jordan", "Lebron", "Curry", "Shaq"];

const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random()*5)
    return moves[randomIndex]    
}
computerMove = getComputerMove();

$winner = $('.winner')
$playerScore = $('#playerScore')
$computerScore = $('#computerScore')
$gamewinner = $('.gamewinner')

//Kobe beats Curry, Shaq
// Jordan beats Curry, Kobe
// Lebron beats Jordan, Kobe
// Curry beats Lebron, Shaq
// Shaq beats Jordan, Lebron

const playGame = (playerMove) => {
    console.log(`computer move is + ${computerMove}`)
    console.log(`player move is + ${playerMove}`)
    if (playerMove === computerMove) {
        $winner.text('Its a tie')
    } else if (playerMove === 'Kobe') {
        if (computerMove === 'Curry' || computerMove === 'Shaq'){ 
            win(playerMove, computerMove)   
        }else {
            lose(playerMove, computerMove)}
    } else if ( playerMove=== 'Jordan') {
        if (computerMove === 'Curry' || computerMove === 'Kobe'){ 
            win(playerMove, computerMove)
        }else {
            lose(playerMove, computerMove)}
    } else if (playerMove ==='Lebron') {
        if (computerMove === 'Jordan' || computerMove === 'Kobe'){ 
            win(playerMove, computerMove)
        }else {
            lose(playerMove, computerMove)}
    } else if (playerMove === 'Curry') {
        if (computerMove === 'Lebron' || computerMove === 'Shaq'){
             win(playerMove, computerMove)
        }else {
            lose(playerMove, computerMove)}
    } else {
        if (computerMove === 'Jordan' || computerMove === 'Lebron') {
            win(playerMove, computerMove)
        }else {
             lose(playerMove, computerMove)}
    }
}



const win =(playerMove, computerMove) => {
    $winner.text(`You chose ${playerMove} and the computer chose ${computerMove}. You win! You're awesome!`)
    score.player ++;
    // console.log(`player score is ${score.player} computer score is ${score.computer}` )
    $playerScore.text(score.player)
    if (score.player === 4) {
        playerChoice = prompt(`Congrats! You've led the Western Conference to victory and won the game!`, `yes|no`)
            if (playerChoice === "yes") {
                location.reload();
            }else if (playerChoice === "no") {
                location.reload();
            
        }
    }
}
const lose =(playerMove, computerMove) => {
    $winner.text(`Computer chose ${computerMove} and you chose ${playerMove}. Computer wins, womp womp!`)
    score.computer++;
    // console.log(`player score is ${score.player} computer score is ${score.computer} `)
    $computerScore.text(score.computer)
    if (score.computer === 4) {
        playerChoice = prompt(`Bummer!! You've lost to the  Eastern Conference. Do you want to try again?`, `yes||no`)
            if (playerChoice=== "yes") {
                location.reload();
            }else if (playerChoice === "no") {
                locationß.reload();
        }
    }

}

$openBtn.on('click', (event)=>{
    changeDisplayValue(event, $modal, 'block')});

$closeBtn.on('click', (event)=>{
    changeDisplayValue(event, $modal, 'none')});

const $kobe = $('#kobe') 
$kobe.on("click", function() {playGame(`${moves[0]}`)})

const $jordan = $('#jordan') 
$jordan.on("click", function() {playGame(`${moves[1]}`)})

const $lebron = $('#lebron') 
$lebron.on("click", function() {playGame(`${moves[2]}`)})

const $curry = $('#curry') 
$curry.on("click", function() {playGame(`${moves[3]}`)})

const $shaq = $('#shaq') 
$shaq.on("click", function() {playGame(`${moves[4]}`)})

});

