// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors (pOne, pTwo) {
if(pOne === 'rock' && pTwo === 'paper') {
    return 'player 2'
}
else if(pOne === 'rock' && pTwo === 'scissors') {
    return 'player 1'
}
else if(pOne === 'paper' && pTwo === 'rock') {
    return 'player 1'
}
else if(pOne === 'paper' && pTwo === 'scissors') {
    return 'player 2'
}
else if(pOne === 'scissors' && pTwo === 'rock') {
    return 'player 2'
}
else if(pOne === 'scissors' && pTwo === 'paper') {
    return 'player 1'
}
else if(pOne === pTwo) {
    return 'draw'
}
}