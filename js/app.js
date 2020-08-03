$(() => {

score = {
    player: 0,
    computer: 0
}

playerMove = null;
computerMove = null;

const moves = ["Kobe", "Jordan", "Lebron", "Curry", "Shaq"];

const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random()*5)
    return moves[randomIndex]    
}
computerMove = getComputerMove();

// const $lizard = $('#lizard')
// const $spock = $('#spock') 

$winner = $('.winner')
$playerScore = $('#playerScore')
$computerScore = $('#computerScore')

//Kobe beats Curry, Shaq
// Jordan beats Curry, Kobe
// Lebron beats Jordan, Kobe
// Curry beats Lebron, Shaq
// Shaq beats Jordan, Lebron



const playGame = (playerMove) => {
    // const computerMove = getComputerMove();
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
    $winner.text(`You chose ${playerMove} and the computer chose ${computerMove}. You win! You're awesome!`).appendTo($winner);
    score.player ++;
    console.log(`player score is ${score.player} computer score is ${score.computer}` )
    $playerScore.text(score.player)
}
const lose =(playerMove, computerMove) => {
    $winner.text(`Computer chose ${computerMove} and you chose ${playerMove}. Computer wins, womp womp!`)
    score.computer++;
    console.log(`player score is ${score.player} computer score is ${score.computer} `)
    $computerScore.text(score.computer)
}

//adjust score for best of 7 games
//run until one player gets


    //if player wins, add 1 to player
    //if computer wins, add 1 to computer, UNTIL one gets to 4



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






//user has 5 choices
//computer choice is selected at random
//user pushes a button, which tells us the user move
//function is written to determine the winner based on both choices
