$(() => {

// prompt()

const changeDisplayValue = (event, selector, displayValue) => {
    const $item = $(selector);
    $item.css('display', displayValue);
    }

const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('.modal-close');
const $startgame = $('#startgame')
$winner = $('.winner')
$playerScore = $('#playerScore')
$computerScore = $('#computerScore')
$gamewinner = $('.gamewinner')

score = {
    player: 0,
    computer: 0
}

computerMove = null;
playerChoice = null;
playerName = null;

const moves = ["Kobe", "Jordan", "Lebron", "Curry", "Shaq"];

const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random()*5)
    return moves[randomIndex]    
}


//Kobe beats Curry, Shaq
// Jordan beats Curry, Kobe
// Lebron beats Jordan, Kobe
// Curry beats Lebron, Shaq
// Shaq beats Jordan, Lebron

const startGame = () => {
    playerName = prompt('To begin, please tell us your name', 'Jerry West')
    $('#player').text(`${playerName}`)
    if (playerName = true) {
        $startgame.hide()
        $gamewinner.text('GOOD LUCK!')
        $('#charles').fadeIn(1000).delay(1000).fadeOut(1000);
        $('.charles').text(`GOOD LUCK! Select your first player!`).fadeIn(1).delay(2000).fadeOut(1000);
    } else if (playerName = false) {
        playerName = player
    }


}


const playGame = (playerMove) => {
    computerMove = getComputerMove();
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
    $winner.text(`You chose ${playerMove} and Charles chose ${computerMove}. You win this round!`)
    score.player ++;
    $playerScore.text(score.player)
    if (score.player === 4) {
        playerChoice = prompt(`Congrats! You beat legendary Charles Barkley, you're awesome! Want to play again?`, `yes|no`)
            if (playerChoice === "yes") {
                score.computer = 0;
                score.player = 0;
                $computerScore.text(0)
                $playerScore.text(0);
                $winner.text(`Select your first player!`)
            }else if (playerChoice === "no") {
                location.reload();
        }
    }
}
const lose =(playerMove, computerMove) => {
    $winner.text(`Charles chose ${computerMove} and you chose ${playerMove}. Charles wins this round, womp womp!`)
    score.computer++;
    $computerScore.text(score.computer)
    if (score.computer === 4) {
        playerChoice = prompt(`Bummer!! You've lost to Charles. He's pretty good at this so don't feel too bad. Do you want to try again?`, `yes||no`)
            if (playerChoice=== "yes") {
                score.computer = 0;
                score.player = 0;
                $computerScore.text(0)
                $playerScore.text(0);
                $winner.text(`Select your first player!`)
            }else if (playerChoice === "no") {
                location.reload();
        }
    }

}

$startgame.on("click", function() {startGame()})

$openBtn.on('click', (event)=>{
    changeDisplayValue(event, $modal, 'block')});

$closeBtn.on('click', (event)=>{
    changeDisplayValue(event, $modal, 'none');
});

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

