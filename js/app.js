$(() => {
    console.log($)
let playerMove = null;
let computerMove = null;

const moves = ["rock", "paper", "scissors"];

// const $lizzard = $('#lizzard')
// const $spock = $('#spock') 

$winner = $('.winner')

//rock beats lizzard, scissors
// paper beats rock, spock
// scissors beats paper, lizzard
// lizzard beats paper, spock
// spock beats scissors, rock

const randomIndex = Math.floor(Math.random()*3)
computerMove = moves[randomIndex]
// console.log(computerMove)

const playGame = () => {
    if (playerMove === computerMove) {
        $('<h2>').text('Its a tie').appendTo($winner);
    } else if (computerMove === moves[0]) {
        if (playerMove === moves[2]) {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else if (computerMove === moves[1]) {
        if (playerMove === moves[0]) {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
    } else {
        if (playerMove === moves[1]) {$('<h2>').text('computer wins').appendTo($winner) }
        else {$('<h2>').text('player wins').appendTo($winner) };
        }
    }
 
const $rock = $('#rock') 
$rock.click([playerMove = moves[0]], playGame())
const $paper = $('#paper')
$paper.click([playerMove = moves[1]], playGame())
const $scissors = $('#scissors')
$scissors.click([playerMove = moves[2]], playGame())

// $lizzard.click([playerMove = moves[3]], playGame)

// $spock.click([playerMove = moves[4]], playGame)








//user has 5 choices
//computer choice is selected at random
//user pushes a button, which tells us the user move
//function is written to determine the winner based on both choices
});