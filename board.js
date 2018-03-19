var cells = document.querySelectorAll("td");
var board = [];
for (var i = 0; i < 9; i++){
  board.push("n")
}
var winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8]
]
