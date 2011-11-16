// Andrew Phillips
//SDI 1111 Project 4
// Library

// String - 1 - Does a string follow a 123-456-7890 pattern like a phone number?

function numberCheck (myNumber) {
	var num = /^(\d{3})[-](\d{3})[-](\d{4})$/;
		if (!myNumber.match(num)) {
				console.log ("This is not a valid phone number."); // if the number works, it will show this 
				return false;
		} else {
				if (myNumber.match(num)) {
					console.log("Valid phone number!"); // if the number is entered incorrectly, this will print on screen
				return true;
				}
		}
};

numberCheck("332-422-9040");