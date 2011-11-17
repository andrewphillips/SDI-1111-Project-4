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


// String - 3 - Is the string a URL? (Does it start with http: or https:?)

function urlCheck (url) {
	var urlz = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; // regEx again to see if the string has a https: or http:
		if (url.match(urlz)) {
			yesUrl = "The URL, " + url + ", is looking just fine!";
			return yesUrl;
		} else {
			noUrl = "This URL won\'t work.  Make sure that " + url + " follows the format: http(s)://domain.com(.net, .edu, etc)";
			return noUrl;
		}
};
var greatUrl = urlCheck("http://www.bliggityblah.com");
console.log(greatUrl);

// String - 4 - Title-case a string (split into words, then uppercase the first letter of each word)

var stuff = "i wish i were uppercase!";
	stuff = stuff.toLowerCase().replace(/^(.)|\s(.)/g,  // regEx 
		function (writeIt) {
		return writeIt.toUpperCase();
		}
	);
	
console.log(stuff); //This displays the string with capital letters!
	
// String - 5 - Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

function change (getChanged) {
		var slash = " /";
		var changer = getChanged.replace(/,/g, slash);
	return changer;		
};

var changeString = change("Harry, Hermione, Ron, Snape, Dumbledore");
console.log(changeString);

