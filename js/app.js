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
    } else if (computerMove === 'kobe') {
        if (playerMove === 'curry' || playerMove === 'shaq') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else if (computerMove === 'jordan') {
        if (playerMove === 'curry' || playerMove === 'kobe') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else if (computerMove ==='lebron') {
        if (playerMove === 'jordan' || playerMove === 'kobe') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else if (computerMove === 'curry') {
        if (playerMove === 'lebron' || playerMove === 'shaq') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else {
        if (playerMove === 'jordan' || playerMove === 'lebron') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    }
    }

 
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
