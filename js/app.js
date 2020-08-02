$(() => {



const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random()*5)
    return moves[randomIndex]    
}

// const $lizard = $('#lizard')
// const $spock = $('#spock') 

$winner = $('.winner')

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
    } else if (computerMove === 'rock') {
        if (playerMove === 'lizard' || playerMove === 'scissors') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else if (computerMove === 'paper') {
        if (playerMove === 'rock' || playerMove === 'spock') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else if (computerMove ==='scisssors') {
        if (playerMove === 'paper' || playerMove === 'lizard') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else if (computerMove === 'lizard') {
        if (playerMove === 'paper' || playerMove === 'spock') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else {
        if (playerMove === 'scissors' || playerMove === 'rock') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    }
    }

 
const moves = ["Kobe", "Jordan", "Lebron", "Curry", "Shaq"];

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
