//Guess the Number Lab

const game = {
  title: 'Guess the Number',
  biggestNum: 100,
  smallestNum: 0,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum-this.smallestNum + 1)) + this.smallestNum;
    game.getGuess();
    game.render();
    return
  },
  getGuess: function() {
    //determines that player has inputted information
    while(playerGuess === null){}
      //determines that player input is a number and is less than biggestNum and greater than smallestNum
      if(typeof playerGuess === 'number' && playerGuess < game.biggestNum &&       playerGuess > game.smallestNum){
        //pushes player Guess to prevGuess array in game object
        game.prevGuesses.push(playerGuess);
      }
      //displays error message if user inputs something other than a number
      if(typeof playerGuess !== 'number'){
        console.log('Please enter a number.')
      }
      //displays error message if user inputs a number not between biggestNum and smallestNum
      if(playerGuess > game.biggestNum || playerGuess < game.smallestNum){
      console.log(`Please enter a number between ${smallestNum} and ${biggestNum} .`)
      }
  },
  render: function(){
    //display messages
    if(playerGuess === game.secretNum){
      console.log(`Congratulations! You guessed in ${game.prevGuesses.length} tries!`);
      game.secretNum = null;
    }
    if(playerGuess < game.secretNum){
      console.log(`Ooh incorrect. Guess higher.`);
      if(game.prevGuesses.length > 1){
        console.log(`Your previous guesses were ${game.prevGuesses.join()}`);
      }else{
        console.log(`Your previous guess was ${game.prevGuesses.join(' ,')}`)
      }
    }
    if(playerGuess > game.secretNum){
      console.log(`Ooh incorrect. Guess lower.`);
      console.log(`Your previous guess were ${game.prevGuesses.join()}`);
    }
  },
  clear: function(){
    console.clear();
  },
  prevGuesses: []
}

let playerGuess = 55;

// game.play();




// while(playerGuess !== game.secretNum){
//   console.log(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}.`)
//   getGuess();
//   render();
// }
