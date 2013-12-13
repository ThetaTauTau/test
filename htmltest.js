var NB_LINES = 3;
var NB_COLUMN = 3;
var CELL_SIZE = 150;
var COLORS = ["#bdc3c7","#2ecc71","#e74c3c"];

var grid = newGrid(NB_LINES,NB_COLUMN);
var ctx = document.getElementById('gameCanvas').getContext('2d');
var currentPlayer = 1;

drawGrid();


function newGrid(X,Y){
	var grid = [];
	for(var y=0; y < Y; y++){
		line = [];
		for(var x=0; x < X; x++){
			line[x] = 0;
		}
		grid[y] = line;
	}
	return grid;
}

function drawGrid(){
	for(var y=0; y < NB_COLUMN; y++){
		for(var x=0; x < NB_LINES; x++){
			ctx.fillStyle = COLORS[grid[x][y]];
			var cell = ctx.fillRect(x*CELL_SIZE+5,y*CELL_SIZE+5,CELL_SIZE-10,CELL_SIZE-10);
			alert(cell);
			//cell.addEventListener("click",function(){changeColor(x,y);},false);
		}
	}
}

function changeColor(x,y){
	var val = grid[x][y];
	if(val==0){
		grid[x][y] = currentPlayer;
		drawGrid();
	}
}