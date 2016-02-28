var dot = function(obj, key){
	return obj[key]
}

var dotCall = function(obj, func, args){
	if (!obj[func].apply) throw 'The property "' + func + '" is not a function';
	return obj[func].apply(obj, [args])
}