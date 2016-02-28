var MyEventEmitter = function(){
	this.events = {};

}

MyEventEmitter.prototype.addListener = function(event, func){
	if(!this.events[event]){this.events[event] = [];} // if there is no event by this name, create an empty array to push stuff into
	this.events[event].push(func)

}

MyEventEmitter.prototype.emit = function(event, val){
	this.events[event].forEach(function(func){
		func.apply(this, [val])
		// func(val) // but this also works to return the right values. What is the use of apply? Why is it needed here?
	})
}