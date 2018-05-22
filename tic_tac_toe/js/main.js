const View = require ("./ttt-view.js")
const Game = require ("../solution/game.js")

$( () => {

      const game = new Game();
      const view = new View();

      View.prototype.setupBoard = function() {
      const unorderedList = $("<ul class='list'></ul>");
      const figure = $('figure.ttt');

      figure.append(unorderedList);


      const listItem1 = $("<li class='cell cell1' id='1'></li>");
      const listItem2 = $("<li class='cell cell2' id='2'></li>");
      const listItem3 = $("<li class='cell cell3' id='3'></li>");
      const listItem4 = $("<li class='cell cell4' id='4'></li>");
      const listItem5 = $("<li class='cell cell5' id='5'></li>");
      const listItem6 = $("<li class='cell cell6' id='6'></li>");
      const listItem7 = $("<li class='cell cell7' id='7'></li>");
      const listItem8 = $("<li class='cell cell8' id='8'></li>");
      const listItem9 = $("<li class='cell cell9' id='9'></li>");

      unorderedList.append(listItem1);
      unorderedList.append(listItem2);
      unorderedList.append(listItem3);
      unorderedList.append(listItem4);
      unorderedList.append(listItem5);
      unorderedList.append(listItem6);
      unorderedList.append(listItem7);
      unorderedList.append(listItem8);
      unorderedList.append(listItem9);

      };

    view.setupBoard();

    View.prototype.bindEvents = function () {
    listChild = $('ul li');

    posHash = {
    1: [0,0],
    2: [0,1],
    3: [0,2],
    4: [1,0],
    5: [1,1],
    6: [1,2],
    7: [2,0],
    8: [2,1],
    9: [2,2],
    }

    listChild.on('click', (e) => {
    e.preventDefault;
    targetList = $(e.currentTarget);
    let id = parseInt(targetList.attr('id'));
    view.makeMove(id);
    game.playMove(posHash[id]);
    if (game.board.isOver()) {
    let paragraph = $('#over');
    paragraph.css('font-weight', 300);
    paragraph.css('font-size', 40);
    paragraph.css('text-align', 'center');
    if (view.counter === 9){
        paragraph.text('Nobody won!! Play again!')
    }
      else if (view.counter % 2 === 0){
      paragraph.text(`Player O is the winner!`);
      } else {
        paragraph.text(`Player X is the winner!`);
      }
    }
    });

    }

    view.bindEvents();

});
