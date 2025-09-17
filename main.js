

//1. Create a var that stores the name that user enters via prompt.
var name = prompt("What is your name?");


//2 Capitalize the first letter of their name
var firstChar = name.slice(0,1);

var upperCasefirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

restOfName =restOfName.toLowerCase();

var capitaliseName = upperCasefirstChar + restOfName

//3 We use the capitalised version of their name to greet using an alert
alert("Hello, " + capitaliseName)