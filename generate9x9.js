testBed();
//getSegments();
function testBed () {
// builds a 9x9
	var ctr =1;
	var nineByNineObj = [];
	for (let i=0;i<9;i++) {
		var tempArray = [];
		for (let j=0;j<9;j++) {
			tempArray.push(ctr);
			ctr++;
		}
		nineByNineObj.push(tempArray);
	}
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
	console.log (nineByNineObj);
	console.log (blocks);

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

	
	for (var block in startPoints) {
		for (var el in startPoints) {
		}
	}

	console.log(ctr);
}

//gets an array, checks bounds and 
function checkBlock (matrix) {
	if ( ! Array.isArray ( matrix)){
		return 'notAnArray';
	}
	for (var element in matrix){
		if ( ! checkBounds ( matrix[element] ) ){
			return 'NotInRange';
		}
	}

	for (var i=0; i<matrix.length; i++) {
		for ( var j=i+1; j<matrix.length; j++) {
			if (matrix[i] == matrix[j]){
				return 'Non unique elements found';
			}
		}
	}
	return 'valid matrix';
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

