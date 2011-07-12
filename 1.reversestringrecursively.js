/*Reversion a string recursively. It's not practical though because javascript fails after a few hundred stack levels. This is only good for short strings.*/ 

function reverseString (s) {
	return s === "" ? "" ://Terminal condition, a la The Little Schemer
		s[s.length-1] + reverseString(/*(cdr s)*/ s.substring(0,s.length-1))
}

//Optimised with variables
function reverseStringOptmzd (s) {
	var len_minus_one = s.length - 1;

	return s === "" ? "" : //Terminal condition, a la The Little Schemer
		s[len_minus_one] + reverseString(s.substring(0,len_minus_one));  
}

