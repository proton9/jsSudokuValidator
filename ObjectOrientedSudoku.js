class sudoku {
	constructor () {
		this.nineByNineObj = [];
		this.blocks = {};
		this.blocksValid 	= false;
		this.rowsValid    	= false;
		this.columnsValid	= false;
	}


	checkBlock (matrix) {
		if ( ! Array.isArray ( matrix)){
			return false;
		}
		for (var element in matrix){
			if ( ! this.checkBounds ( matrix[element] ) ){
				return false;
			}
		}
		if ( ! this.checkIfAllElementsUnique(matrix) ) {
			return false;
		}
		return true;
	}

	checkIfAllElementsUnique (matrix) {
		for (var i=0; i<matrix.length; i++) {
			for ( var j=i+1; j<matrix.length; j++) {
				if (matrix[i] == matrix[j]){
					return false;
				}
			}
		}
		return true;
	}

	checkBounds ( num ) {
		if ( ! parseInt ( num ) ){
			return false;
		}
		if ( num > 0 && num < 10) {
			return true;
		}
		return false;
	}

	//end of core functions

	//this function creates a list of box/matrix bounds
	generateBlocks () {
		var segments = {
			b1 : {i:0, j:0},
			b2 : {i:0, j:3},
			b3 : {i:0, j:6},
			b4 : {i:3, j:0},
			b5 : {i:3, j:3},
			b6 : {i:3, j:6},
			b7 : {i:6, j:0},
			b8 : {i:6, j:3},
			b9 : {i:6, j:6}		
		}
		for (var block in segments) {
			var rowStart = segments[block]['i'];
			var colStart = segments[block]['j'];
			var blockArray = [];
			for (let i=rowStart; i<rowStart+3; i++) {
				var tempArray = [];
				for (let j=colStart; j<colStart+3; j++) {
					tempArray.push (this.nineByNineObj[i][j]);
				}
				for (var el in tempArray) {
					blockArray.push (tempArray[el]);
				}
			}
			this.blocks[block] = blockArray;
		}
	}

	checkMatrixs () {
		this.blocksValid = true;
		for (var block in this.blocks) {
			this.blocksValid = this.checkBlock( this.blocks[block] ) 
			if (! this.blocksValid) {
				this.blocksValid = false;
				break;
			}
		}
	}

	checkRows () {
		this.rowsValid = true;
		for (var row in this.nineByNineObj ) {
			this.rowsValid = this.checkBlock (this.nineByNineObj[row]);
			if (! this.rowsValid) {
				this.rowsValid = false;
				break;
			}
		}
	}

	checkColumns () {
		this.columnsValid = true;
		for (let row=0; row<9; row++) {
			var tempArray= [];
			for (let col=0; col<9; col++){
				tempArray.push(this.nineByNineObj[col][row]);
			}
			console.log (tempArray);
			this.columnsValid = this.checkBlock (tempArray);
			if (! this.columnsValid) {
				this.columnsValid = false;
				break;
			}
		}
	}
}

var solveThis = new sudoku ();
solveThis.nineByNineObj =   [
 [1,6,9,8,5,4,2,7,3],
 [8,3,7,2,1,6,9,5,4],
 [2,5,4,7,3,9,6,8,1],
 [4,7,5,3,9,2,1,6,8],
 [9,1,2,6,7,8,4,3,5],
 [3,8,6,5,4,1,7,9,2],
 [5,9,3,4,2,7,8,1,6],
 [6,2,1,9,8,3,5,4,7],
 [7,4,8,1,6,5,3,2,9] 
 ];
solveThis.generateBlocks();
solveThis.checkMatrixs();
solveThis.checkRows();
solveThis.checkColumns();

console.log (solveThis.blocksValid);
console.log (solveThis.rowsValid);
console.log (solveThis.columnsValid);

if (solveThis.blocksValid && solveThis.rowsValid && solveThis.columnsValid) {
	console.log ("valid sudoku");
} else {
	console.log ("invalid sudoku");
}