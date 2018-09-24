function checkBlock (matrix) {
	if ( ! Array.isArray ( matrix)) {
		return;
	}
	for (var element in matrix){
		if ( ! checkBounds ( matrix[element] )) {
			return false;
		}
	}

	for (var i=0; i<matrix.length; i++) {
		for ( var j=i+1; j<matrix.length; j++) {
			if (matrix[i] == matrix[j]){
				return false;
			}
		}
	}
}

function checkBounds ( num ) {
	if ( ! parseInt ( num ) ){
		return false;
	}
	if ( num > 0 && num < 10) {
		return true;
	}
}