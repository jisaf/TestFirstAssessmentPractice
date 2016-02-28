var difference = function(arr1, arr2){
	var unique = arr1.filter(function(val){
		for (var i = 0 ; i < arr2.length ; i++){
			// console.log(val + " = " + arr2[i]);
			if (val === arr2[i]){
				return false
			}
		}
		return true
	})
	return unique;
}

var symmetricDiff = function(a, b){
	var u1 = difference(a, b);
	var u2 = difference(b, a);
	return u1.concat(u2)

}