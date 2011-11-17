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
	var urlz = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; // regEx check for http:/https:
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
	stuff = stuff.toLowerCase().replace(/^(.)|\s(.)/g, 
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

// Number - 6 - Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

function monies (amount) {
	var costs = amount.toFixed(8);
	return costs;
};

var lotsaMonies = monies(1.8);
console.log(lotsaMonies);

// Number - 7 - Fuzzy-match a number: is the number above or below a number within a certain percent?

// Number - 8 - Find the number of hours or days difference between two dates.
/*
function days_between (date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)
    
    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)
};

var dayDifference = days_between(23, 17);
console.log(dayDifference);
*/

// Number - 9 - Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var number = "2011",
	 numNum = function () {
	 	theNumber = parseInt(number);
	 return number;
	 };

console.log("I see that the number is " + numNum());

// Array - 10 - Find the smallest value in an array that is greater than a given number

function smallNumber (baseline, numArray) {
		for (var i =0; i < numArray.length; i++) {
			 if (numArray[i] > baseline) {
			 return numArray[i];
			 }
		}
};

var theNumbaz = smallNumber (27, [5, 17, 43, 175, 3025]);
console.log (theNumbaz);

// Array - 11 - Find the total value of just the numbers in an array, even if some of the items are not numbers.

// Array - 12 - Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2}, {a:3},{a:1}] → [{a:1},{a:2},{a:3}].

function eating (vegetables) {
		function sortVeggies(a, b) {
			return a.place - b.place;
		}
		var veggieOrder = (vegetables.sort(sortVeggies));
		return veggieOrder;
};

var goodVeggies = 
		eating ([{
				name: "Broccoli",
				place: 2
			}, {
				name: "Squash",
				place: 1
			}, {
				name: "Eggplant",
				place: 4
			}, {
				name: "Mushrooms",
				place: 3
		}]);
console.log(goodVeggies);