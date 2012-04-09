//Sets an interval that allows the process to finish if the timeout is
//shorter than the process time. Also takes an array of arguments.
function setBetterInterval(fn, time, array_of_args) {
    var obj = {};

		recur();
		
		//Returns object reference. obj.timer_code holds the timercode
		//
    return obj;

		//Closure
    function recur() {
			
			//So that multiple arguments can be to the function
			fn.apply({}, array_of_args);

			//Assign timercode to obj.timer_code
			obj.timer_code = setTimeout(function() {
            recur(fn, time, array_of_args);
        }, time);
    }
}

//Clears the Better
function clearBetterInterval (obj) {
	clearTimeout(obj.timer_code);
}

//Example/Test
var cool = setBetterInterval(function() {
		console.log(arguments.length);
}, 1000, [0, 2, 3, 4, 0]);

//To clear
clearBetterInterval(cool);

