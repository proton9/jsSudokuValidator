//getSegments();
// builds a 9x9
nineByNineObj = 
[
	[2,1,5,4,6,9,8,7,3],
	[9,4,3,7,2,8,6,5,1],
	[7,8,6,1,5,3,2,9,4],
	[3,5,4,6,9,7,1,8,2],
	[6,9,7,8,1,2,3,4,5],
	[8,2,1,3,4,5,7,6,9],
	[4,6,2,9,8,1,5,3,7],
	[5,3,8,2,7,4,9,1,6],
	[1,7,9,5,3,6,4,2,8],
];
generateBlocks();
function generateBlocks () {

	var segments = {
		b1 : {
			i:0,
			j:0
		},
		b2 : {
			i:0,
			j:3
		},
		b3 : {
			i:0,
			j:6
		},
		b4 : {
			i:3,
			j:0
		},
		b5 : {
			i:3,
			j:3
		},
		b6 : {
			i:3,
			j:6
		},
		b7 : {
			i:6,
			j:0
		},
		b8 : {
			i:6,
			j:3
		},
		b9 : {
			i:6,
			j:6
		}		
	}
	var blocks = {}
	for (var block in segments) {
		var rowStart = segments[block]['i'];
		var colStart = segments[block]['j'];
		var blockArray = [];
		for (let i=rowStart; i<rowStart+3; i++) {
			var tempArray = [];
			for (let j=colStart; j<colStart+3; j++) {
				tempArray.push (nineByNineObj[i][j]);
			}
			for (var el in tempArray) {
				blockArray.push (tempArray[el]);
			}
		}
		blocks[block] = blockArray;
	}
	//individual block check
	var blocksValid = true;
	for (block in blocks) {
		blocksValid = checkBlock( blocks[block] ) 
		if (! blocksValid) {
			blocksValid = false;
			break;
		}
	}
	//block checks end

	//row check start
	var rowsValid = true;
	for ( row in nineByNineObj ) {
		rowsValid = checkBlock (nineByNineObj[row]);
		if (! rowsValid) {
			rowsValid = false;
			break;
		}
	}
	// row check end

	var columnsValid = true;
	for (let row=0; row<9; row++) {
		var tempArray= [];
		for (let col=0; col<9; col++){
			tempArray.push(nineByNineObj[row][col]);
		}
		columnsValid = checkBlock (tempArray);
		if (! columnsValid) {
			columnsValid = false;
			break;
		}
	}
		
	if (blocksValid && rowsValid && columnsValid) {
		console.log ("all valid matrixes!");
	} else {
		console.log ("Not all valid matrixes!");
	}
}


function getSegments () {
	var ctr =0;
	startPoints = [];
	for (let i=0; i< 9; i++) {
		if (i % 3 == 0) {
			ctr++;
			startPoints.push (i);
		}
	}
	var len = startPoints * startPoints;

	var blockSegments = {};
}

//gets an array, checks bounds and 
function checkBlock (matrix) {
	if ( ! Array.isArray ( matrix)){
		return false;
	}
	for (var element in matrix){
		if ( ! checkBounds ( matrix[element] ) ){
			return false;
		}
	}
	if ( ! checkIfAllElementsUnique(matrix) ) {
		return false;
	}
	return true;

}

function checkIfAllElementsUnique (matrix) {
	for (var i=0; i<matrix.length; i++) {
		for ( var j=i+1; j<matrix.length; j++) {
			if (matrix[i] == matrix[j]){
				return false;
			}
		}
	}
	return true;
}

function checkBounds ( num ) {
	if ( ! parseInt ( num ) ){
		return false;
	}
	if ( num > 0 && num < 10) {
		return true;
	}
	return false;
}

