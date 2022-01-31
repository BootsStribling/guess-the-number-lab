//Guess the Number Lab

const game = {
  title: 'Guess the Number',
  biggestNum: 100,
  smallestNum: 0,
  secretNum: null,
  play: function() {
    this.secreNum = Math.floor(Math.random() * (this.biggestNum-this.smallestNum + 1)) + this.smallestNum
  },
  prevGuesses: []
}

let playerGuess = 55;

function getGuess() {
  smallestNum = game.smallestNum;
  biggestNum = game.biggestNum;
  console.log(`Enter a guess between ${smallestNum} and ${biggestNum}.`)
  if(typeof playerGuess === 'number' && playerGuess < biggestNum && playerGuess > smallestNum){
    game.prevGuesses.push(playerGuess);
  }
  if(typeof playerGuess !== 'number'){
    console.log('Please enter a number.')
  }
  if(playerGuess > biggestNum || playerGuess < smallestNum){
    console.log(`Please enter a number between ${smallestNum} and ${biggestNum}.`)
  }
}
getGuess();