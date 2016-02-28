function renameFiles(arr){
	var renamedArr = [];
	if (arr.length > 0) {
		arr.forEach(function(val){
			var file = /[a-z]+/ig.exec(val);
			var num = +/[\d]/g.exec(val);
			if (renamedArr.indexOf(val) === -1){ // if it's not yet in the new array, put it in as is
				renamedArr.push(val)
			} else if (renamedArr.indexOf(val) > -1){ //if it exists already
				var iter = 1;
				var built = val+"("+iter+")";
				while(renamedArr.indexOf(built) > -1){
				    iter++
				    built = val+"("+iter+")";
				}
				renamedArr.push(built) //run through the new array until it doesn't exist, then add it.
			}

		})
	}
	return renamedArr
}