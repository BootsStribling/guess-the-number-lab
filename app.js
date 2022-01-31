//Guess the Number Lab

const game = {
  title: 'Guess the Number',
  biggestNum: 100,
  smallestNum: 0,
  secretNum: null,
  play: function() {
    this.secreNum = Math.floor(Math.random() * (this.biggestNum-this.smallestNum + 1)) + this.smallestNum
  }
}