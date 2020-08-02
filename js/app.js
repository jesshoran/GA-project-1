$(() => {



const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random()*3)
    return moves[randomIndex]    
}

// const $lizzard = $('#lizzard')
// const $spock = $('#spock') 

$winner = $('.winner')

//rock beats lizzard, scissors
// paper beats rock, spock
// scissors beats paper, lizzard
// lizzard beats paper, spock
// spock beats scissors, rock



const playGame = (playerMove) => {
    const computerMove = getComputerMove();
    console.log(`computer move is + ${computerMove}`)
    console.log(`player move is + ${playerMove}`)
    if (playerMove === computerMove) {
        $('<h2>').text('Its a tie').appendTo($winner);
    } else if (computerMove === 'rock') {
        if (playerMove === 'paper') {$('<h2>').text('player wins').appendTo($winner) }
        else {$('<h2>').text('computer wins').appendTo($winner) };
    } else if (computerMove === 'paper') {
        if (playerMove === 'scissors') {$('<h2>').text('player wins').appendTo($winner) }
        else {$('<h2>').text('computer wins').appendTo($winner) };
    } else if (computerMove ==='scisssors' {
        if (playerMove === 'paper') {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
        }
    }

 
const moves = ["rock", "paper", "scissors"];

const $rock = $('#rock') 
$rock.on("click", function() {
    playGame(`${moves[0]}`)
})
const $paper = $('#paper') 
$paper.on("click", function() {
    playGame(`${moves[1]}`)
})
const $scissors = $('#scissors') 
$scissors.on("click", function() {
    playGame(`${moves[2]}`)
})

});

// $lizzard.click([playerMove = moves[3]], playGame)

// $spock.click([playerMove = moves[4]], playGame)








//user has 5 choices
//computer choice is selected at random
//user pushes a button, which tells us the user move
//function is written to determine the winner based on both choices
