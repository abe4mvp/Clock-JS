(function (root){
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var readline = require('readline');

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  // BOARD class
  function Board() {
  };

  Board.prototype.create = function() {
    this.towers = [[ 1, 2, 3, 4, 5], [], []];
    console.log(this.towers);
  };

  Board.prototype.validMove = function(fromCol, toCol) {
    console.log(this.towers);
    return (this.towers[toCol] || this.towers[fromCol] ||
      this.towers[fromCol][0] < this.towers[toCol][0]);
  };

  Board.prototype.movePiece = function(fromCol, toCol) {
    if (this.validMove(fromCol, toCol)) {
      var disk = this.towers[fromCol].shift();
      console.log(toCol);
      this.towers[toCol].unshift(disk);
      console.log(this.towers);
    };
  };

  // GAME class
  var Game = Hanoi.Game = function() {
    this.setupGame();
  };

  Game.prototype.setupGame = function() {
    this.board = new Board();
    this.board.create();
    console.log("BOARD IN SETUP" + this.board)
  }


  Game.prototype.makeMove = function() {
    var self = this;

    reader.question("Enter move in integers (ex: from, to)", function(move){
      var move = move.split(',')
      var userFrom = parseInt(move[0]);
      var userTo = parseInt(move[1]);

      if (self.board.validMove(userFrom, userTo)){
        self.board.movePiece(userFrom, userTo);

        if (self.board.towers[userTo].length === 5) {
          // game over
          console.log("you win!")
          reader.close();
        } else {
          self.makeMove();
        };

      } else {
        console.log("Invalid move, try again");
        self.makeMove();
      }
    });
  };

})(this);

var game = new this.Hanoi.Game();

game.makeMove();