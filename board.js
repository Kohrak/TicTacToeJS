var cells = document.querySelectorAll("td");
var board = [];
var token = "X"
var userToken = "X"
var ai = true;
var winner = false;
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
  [0, 4, 8],
  [2, 4, 6]
]

var buttons = {
  reset: document.querySelector("#reset"),
  token: document.querySelector("#token"),
  ai: document.querySelector("#ai")
}
function checkWin(moves){
  for(var i = 0; i < moves.length; i++){
    var arr = [board[moves[i][0]], board[moves[i][1]], board[moves[i][2]]]
    if (!arr.includes("")){
      if (arr.reduce(function(a, b){ return (a === b) ? a : NaN; })){
        return(true);
      }
    }
  }
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

function play(cell){
  move(cell);
  updateBoard();
  winner = checkWin(moves)
  if(winner){
    alert(token + " win");
  }
  changeToken();

}

cells.forEach(function(cell){
  cell.addEventListener("click", function(){
  var num = parseInt(this.id)
    if (board[num] == "" && !winner){
      play(num);
      if(ai && !winner){
        aiPlay();
      }
    }
    if (winner){
      reset();
    }
  })
})

function reset(){
  token = userToken;
  winner = false;
  board = [];
  for (var i = 0; i < 9; i++){
    board.push("")
  }
  updateBoard();
}

function aiPlay(){
  var blanks = []
  for(var i = 0; i < board.length; i++){
    if(board[i] == ""){
      blanks.push(i);
    }
  }
  var cell = blanks[Math.floor(Math.random() * blanks.length)];
  play(cell);
}

buttons.reset.addEventListener("click", reset);
buttons.ai.addEventListener("click", function(){
  reset();
  ai = ai == true ? false : true;
  this.textContent = ai == true ? "NPC ON" : "NPC OFF";
})
buttons.token.addEventListener("click", function(){
  userToken = userToken == "X" ? "O" : "X"
  reset();
  this.textContent = userToken;
})
