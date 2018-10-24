// src/logic/game.js

const board = require('./board.js');
const player = require('./player.js');

class game {
  constructor() {
    this.grid = board();
    this.x = player("x");
    this.o = player("o");
    this.turnCounter = 0;
    this.turn = false; // false for x, true for o
  }

  click(row, col) {
    if(turn) {
      this.grid.changeBoard(row, col, this.o);
    } else {
      this.grid.changeBoard(row, col, this.x);
    }
    this.turn = !this.turn;
    this.turnCounter++;
    if(this.turnCounter > 4) {
      this.checkWinner()
    }
  }

  checkWinner() {
    this.grid.checkWinner();
  }
}
