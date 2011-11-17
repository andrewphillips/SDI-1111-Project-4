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


// String - 2 - Does a string follow an aaa@bbb.ccc pattern like an email address?

function emailValidate (address) {
		var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // regEx to verify format
			if (address.match(email)) {
				validEmail = "This email is valid" // shows up if email is in a valid format
				return validEmail;
			} else {
				notValidEmail = "This email format is invalid; be sure to check if \'@\' and \'.\' are in the right place." // prints if invalid
				return notValidEmail;
			}
};
var isValid = emailValidate("mo@bettah.com");
console.log(isValid);


// 