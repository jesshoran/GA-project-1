$(() => {

score = {
    player: null,
    computer: null
}


const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random()*5)
    return moves[randomIndex]    
}

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
    const computerMove = getComputerMove();
    console.log(`computer move is + ${computerMove}`)
    console.log(`player move is + ${playerMove}`)
    if (playerMove === computerMove) {
        $('<h2>').text('Its a tie').appendTo($winner);
    } else if (playerMove === 'kobe') {
        if (computerMove === 'curry' || computerMove === 'shaq') 
            {win();}
        else {lose();}
    } else if ( playerMove=== 'jordan') {
        if (computerMove === 'curry' || computerMove === 'kobe') 
            {win()}
        else {lose()};
    } else if (playerMove ==='lebron') {
        if (computerMove === 'jordan' || computerMove === 'kobe') 
            {win()}
        else {lose()};
    } else if (playerMove === 'curry') {
        if (computerMove === 'lebron' || computerMove === 'shaq') 
            {win()}
        else {lose()};
    } else {
        if (computerMove === 'jordan' || computerMove === 'lebron') 
            {win()}
        else {lose()};
    }
    }


const win =() => {
    {$('<h2>').text(`You chose ${playerrMove} and the computer chose ${computerMove}. You win! You're awesome!`).appendTo($winner) }; 
    (score.player ++).appendTo($playerScore)
    
}
const lose =() => {
    {$('<h2>').text(`Computer chose ${computerMove} and you chose ${playerMove}. Computer wins, womp womp better luck next time!`).appendTo($winner) }; 
    (score.computer ++).appendTo($computerScore)
}

//adjust score for best of 7 games
//run until one player gets


    //if player wins, add 1 to player
    //if computer wins, add 1 to computer, UNTIL one gets to 4



 
const moves = ["kobe", "jordan", "lebron", "curry", "shaq"];

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
