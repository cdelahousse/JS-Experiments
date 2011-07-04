//BROKEN! NEED TO CREATE GLOBAL VAR TO FIX THIS
//Sets an interval that allows the process to finish if the timeout is
//shorter than the process time. Also takes an array of arguments.

function betterSetInterval(fn, time, array_of_args) {
    var obj = {};

    obj.fn = fn;

		wait();
		recur(fn, time, array_of_args);
    return obj;

    function recur(fn, time, array_of_args) {
			
			//So that multiple arguments
			obj.fn.apply(fn, array_of_args);

			obj.timer_code = setTimeout(function() {
						console.log(obj.timer_code);
            recur(fn, time, array_of_args);
        }, time);
    }
}

function clearBetterSetInterval (obj) {
	clearTimeout(obj.timer_code);
}

//Example
var cool = betterSetInterval(function() {
		console.log(arguments.length);
}, 300, [0, 2, 3, 4, 0]);

//Sets an interval that allows the process to finish if the timeout is
//shorter than the process time. Also takes an array of arguments.

function betterSetInterval(fn, time, array_of_args) {
	var obj = {};

	obj.fn = fn;
	recur(fn, time, array_of_args);
	return obj;

	function recur(fn, time, array_of_args) {

		//Call used o that multiple arguments can be used on the 
		obj.fn.apply(fn, array_of_args);

		obj.timer_code = setTimeout(function() {
				console.log(obj.timer_code);
				recur(fn, time, array_of_args);
				}, time);
	}
}

function clearBetterSetInterval (obj) {
	clearTimeout(obj.timer_code);
}

//Example
var cool = betterSetInterval(function() {
		console.log(arguments.length);
		}, 1000, [0, 2, 3, 4, 0]);

clearBetterSetInterval(cool);

function wait (num) {
	var mart = '',
			i = 0;

	while (i <= 10000000) {
		mart += 'ya';
		i++;
	}
	console.log(mart.length,'done')
}
