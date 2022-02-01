//Guess the Number Lab

const game = {
  title: 'Guess the Number',
  biggestNum: 3,
  smallestNum: 0,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    //prompts user to choose largest range and smallest range for the game
    this.adjustRange();
    //gets the secret number 
    this.secretNum = 
      Math.floor(Math.random() * (this.biggestNum-this.smallestNum + 1)) + this.smallestNum;
    //run the game
    do{
      //Get users guess and push to prevGuesses
      this.prevGuesses.push(this.getGuess());
      //changes range with resetRange
      this.resetRange();
      //calls render to analyze user guess
      this.render();
    }while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum);
    //return the guess after the loop is complete
  },
  getGuess: function() {
    //guess
    let guess;
    //code block completes when the below while condition is true, but only exits the loop with the return statement when the while condition is false 
    do {
      // point guess at the rounded number for the player's guess 
      guess = parseInt(
        prompt(`Guess a number between ${this.biggestNum} and ${this.smallestNum}`)
      )
    //if     
    } while(isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    // once above condition is false, completes the code block and returns guess
      return guess;
    },
    adjustRange: function(){
      do{
        //Assign smallest number in range to a rounded integer
        this.smallestNum = parseInt(
          prompt(`Enter a number that will be the low end of the range.`)
        );
      //while smallest Num is not a number
      } while (typeof this.smallestNum !== 'number')
      
      do {
        //Prompt and assign biggest number in the range to a rounded integer
        this.biggestNum = parseInt(
          prompt(`Enter a number that will be the high end of the range.`)
        )
        //while biggest num is no a number
      } while (typeof this.biggestNum !== 'number' || this.biggestNum < this.smallestNum);
    },

    resetRange: function() {
      // if the most recent guess stored in prevGuesses is larger than secretNum
      if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){
        // sets players last guess equal to the players biggestNum
        this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
      } 
      // if prevGuesses is less than secretNum
      if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum){
        //set players last guess equal to the smallestNum
        this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1];
      }
    },
    render: function(){
      //initialize result variable
      let result;
      if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
        //make the result message the victory message
        result = `Congratulations! You guessed in ${this.prevGuesses.length}`;
      }
      if(this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum){
        result = `Ooh that's too low. Prev Guesses: ${this.prevGuesses.join(',')}.`
      }
      if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){
        result = `Ooh that's too high. Prev Guesses: ${this.prevGuesses.join(', ')}.`
      }
      alert(result)
    },
    
};


game.play();


//Difference between Math.round and parseInt() and isNaN();
// let num = -1.72323234234234;
// let num2 = Math.round(num);
// let num3 = parseInt(num);
// let num4 = isNaN(num);
// console.log(num2);
// console.log(num3);
// console.log(num4);


// while(playerGuess !== game.secretNum){
//   console.log(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}.`)
//   getGuess();
//   render();
// }


