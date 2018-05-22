const View = require ("./ttt-view.js")
const Game = require ("../solution/game.js")
// console.log("I'm here");
$( () => {

      const game = new Game();
      const view = new View();
      console.log(View.prototype);
      View.prototype.setupBoard = function() {
      const unorderedList = $("<ul class='list'></ul>");
      const figure = $('figure.ttt');
      console.log(figure);
      figure.append(unorderedList);
      // console.log(game);

      const listItem1 = $("<li class='cell cell1'></li>");
      const listItem2 = $("<li class='cell cell2'></li>");
      const listItem3 = $("<li class='cell cell3'></li>");
      const listItem4 = $("<li class='cell cell4'></li>");
      const listItem5 = $("<li class='cell cell5'></li>");
      const listItem6 = $("<li class='cell cell6'></li>");
      const listItem7 = $("<li class='cell cell7'></li>");
      const listItem8 = $("<li class='cell cell8'></li>");
      const listItem9 = $("<li class='cell cell9'></li>");

      unorderedList.append(listItem1);
      unorderedList.append(listItem2);
      unorderedList.append(listItem3);
      unorderedList.append(listItem4);
      unorderedList.append(listItem5);
      unorderedList.append(listItem6);
      unorderedList.append(listItem7);
      unorderedList.append(listItem8);
      unorderedList.append(listItem9);
      // console.log(unorderedList);
      };
    view.setupBoard();


});
