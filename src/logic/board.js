// src/logic/board.js

const player = require('./player.js')

class board {
  constructor() {
    this.grid = [ 
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ];
  }
  
  changeBoard(row, col, player) {
    this.grid[row][col] = player.name;
  }
  
  printBoard() {
    console.log(this.grid[0][0] + " | " + this.grid[0][1] + " | " + this.grid[0][2]);
    console.log("=========");
    console.log(this.grid[1][0] + " + " + this.grid[1][1] + " + " + this.grid[1][2]);
    console.log("=========");
    console.log(this.grid[2][0] + " | " + this.grid[2][1] + " | " + this.grid[2][2]);
  }

  checkWinner() {
    return false;
  }
}

// var grid = new board();
// grid.printBoard();

module.exports = board;