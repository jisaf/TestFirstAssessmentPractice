
function translate(str){
	var vowels = ["a","e","i","o","u"];
	var arr = str.split(" ");
	var out = arr.map(function(val){
		var index = str.length;
		for (var i = 0; i<vowels.length;i++){
			if (val.indexOf(vowels[i]) != -1 && val.indexOf(vowels[i]) < index){
				index = val.indexOf(vowels[i]);
				if (vowels[i] === "u" && val.charAt(index-1) === "q"){
					index ++;
				}
			}

		}
		return val.substring(index)+val.substring(0, index)+"ay"
	});
	return out.join(" ");

}