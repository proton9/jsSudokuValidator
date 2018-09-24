var args = process.argv.slice(2);
/*for (var element in args) {
	console.log ( checkBounds(args[element])); 
}*/
var arr = [];
if (args.length <1 ) {
	return false;
}
for (let i=0; i < args.length; i++ ) {
	arr.push(args[i]);
}
console.log (checkBlock (arr));

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

