let playerMove = null
let computerMove = null

const $choice = ('.choice')
const $rock = $('#rock')
const $paper = $('#paper')
const $scissors = $('#scissors')
const $lizzard = $('#lizzard')
const $spock = $('#spock')

moves = ["rock", "paper", "scissors", "lizzard", "spock"]

const randomIndex = Math.floor(Math.random()*5)
computerMove = moves[randomIndex]

playGame = () => {

}



$choice.on("click", playGame)







