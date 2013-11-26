(function (root){
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var readline = require('readline');

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var game = Hanoi.game = function() {
    makeMove();
  }

  var makeMove = function() {
    reader.question = ("Enter move in integers (ex: from, to)", function(move){
      var userFrom = move[0];
      var userTo = move[1];

      if (validMove(userFrom, userTo)){
        movePiece(userFrom, userTo, gameOverCallback);
      } else {
        console.log("Invalid move, try again");
        makeMove();
      }
    });
  }

  var board = [[ 1, 2, 3, 4, 5], [], []];

  var validMove = function(fromCol, toCol) {
    return (board[fromCol][0] < board[toCol][0] || board[toCol].length === 0);
  };

  var movePiece = function(fromCol, toCol, gameOverCallback) {
    if (validMove(fromCol, toCol)) {
      var disk = board[fromCol].shift();
      if (board[toCol].unshift(disk) === 5){
        // game over
        gameOverCallback("you win")
      };
    };
  };


})(this);

this.game();