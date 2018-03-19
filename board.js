var cells = document.querySelectorAll("td");
var board = [];
var token = "X"
for (var i = 0; i < 9; i++){
  board.push("")
}
var moves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8]
]
function checkWin(moves){
  for(var i = 0; i < moves.length; i++){
    var arr = [board[moves[i][0]], board[moves[i][1]], board[moves[i][2]]]
    if (!arr.includes("")){
      if (arr.reduce(function(a, b){ return (a === b) ? a : NaN; })){
        console.log(board);
        return(true);
      }
    }
  }
  console.log(board);
  return(false);
}

function updateBoard(){
  for(var i = 0; i < board.length; i++){
    cells[i].textContent = board[i];
  }
}

function move(cell){
  board[cell] = token;
}

function changeToken(){
  token = token == "X" ? "O" : "X";
}