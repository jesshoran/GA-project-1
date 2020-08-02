let playerMove = null
let computerMove = null

moves = ["rock", "paper", "scissors", "lizzard", "spock"]

const $rock = $('#rock') 
const $paper = $('#paper')
const $scissors = $('#scissors') 
const $lizzard = $('#lizzard')
const $spock = $('#spock') 

$winner = $('.winner')

//rock beats lizzard, scissors
// paper beats rock, spock
// scissors beats paper, lizzard
// lizzard beats paper, spock
// spock beats scissors, rock

const randomIndex = Math.floor(Math.random()*5)
computerMove = moves[randomIndex]

playGame = () => {
    if (playerMove === computerMove) {
        $winner.text(`It's a tie!`)
    // } else if (computerMove === moves[0) {
    //     if (playerChoice === moves[2] || playerChoice === moves[3]){
    //     $winner.text(`computer wins!`)
    //     } else {
    //         $winner.text('player wins!')
    // }else if (computerMove === moves[1]) {
    //     if (playerChoice === moves[0]) || (playerChoice === moves [4])
    //     $winner.text('computer wins!')


    // }

    }
}

// $rock.on("click", console.log('choice is rock'))


$rock.click([playerMove = moves[0]], playGame)

$paper.click([playerMove = moves[1]], playGame)

$scissors.click([playerMove = moves[2]], playGame)

$lizzard.click([playerMove = moves[3]], playGame)

$spock.click([playerMove = moves[4]], playGame)








//user has 5 choices
//computer choice is selected at random
//user pushes a button, which tells us the user move
//function is written to determine the winner based on both choices
