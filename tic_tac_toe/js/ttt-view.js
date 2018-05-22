function markX (square) {
  const currentSquare = $(`#${square}`);
  currentSquare.text('X');
  currentSquare.css('background-color', 'white');
  currentSquare.css('font-size', '75px');
  currentSquare.css('font-weight', '500');
  currentSquare.css('font-family', 'sans-serif');
  currentSquare.css('text-align', 'center');
  currentSquare.css('color', 'red');
}

function markO (square) {
  const currentSquare = $(`#${square}`);
  currentSquare.text('O');
  currentSquare.css('background-color', 'white');
  currentSquare.css('font-size', '75px');
  currentSquare.css('font-weight', '500');
  currentSquare.css('font-family', 'sans-serif');
  currentSquare.css('text-align', 'center');
  currentSquare.css('color', 'blue');
}

class View {

  constructor(game, $el) {
    this.counter = 0;
  }

  bindEvents() {}

  makeMove($square) {
    if (this.counter % 2 === 0) {
      markX($square);
      this.counter += 1;
    } else {
      markO($square);
      this.counter += 1;
    }
  }

  setupBoard() {}
}

module.exports = View;
