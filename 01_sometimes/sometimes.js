
var sometimes = function (func){
	var iter = 0
	return function(a, b){
		if (iter < 3){
			iter++
			return func.apply(this, arguments)
		} else if (iter % 2 != 0){
			iter++
			return "I do not know!"
		} else {
			iter++
			return func.apply(this, arguments)
		}
	}
}

// var sometimes = function(func){
// 	var iter = 0;
// 	return function(){
// 		if(iter<3){
// 			iter++
// 			return func.apply(this, arguments)
// 		}
// 	}
// }