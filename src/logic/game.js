// src/logic/game.js

const Board = require('./board.js');
const Player = require('./player.js');

class Game {
  constructor() {
    this.grid = new Board();
    this.x = new Player("x");
    this.o = new Player("o");
    this.turnCounter = 0;
    this.turn = false; // false for x, true for o
  }

  click(row, col) {
    if(this.turn) {
      this.grid.changeBoard(row, col, this.o);
    } else {
      this.grid.changeBoard(row, col, this.x);
    }
    this.turnCounter++;
    if(this.turnCounter > 4) {
      this.checkWinner()
    }
    this.turn = !this.turn;
  }

  print() {
    this.grid.printBoard();
  }

  checkWinner() {
    if(this.grid.checkWinner()) {
      if(this.turn) {
        console.log("o wins");
      } else {
        console.log("x wins");
      }
    }
  }
}

var game = new Game();
game.print();
game.click(1, 1);
game.print();
game.click(0, 0);
game.click(2, 2);
game.print();

module.exports = Game;