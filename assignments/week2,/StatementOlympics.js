var n = 5;
if (n > 3) {
   console.log ("5 is greater than 3")
}
if( "cat".length === 3 ) {
   console.log("is the length");
}
if( "cat" != "dog" ) {
   console.log("not the same");
}
var person = {
   name: "Bianca",
   age: "14",
}
if ( person.age >= 18 ) {
console.log ("can go to the movies")
}
else {
   console.log (person.name + " is not allowed to go to the movies")
}
var person = {
   name: "Bianca",
   age: "14",
}
if ( person.name.charAt(0) == "B" ) {
   console.log ( "allowed into movies")
}
var person = {
   name: "Bianca",
   age: "14",
}
if ( person.name.charAt(0) == "B" && person.age >= 18 ) {
   console.log ( "allowed into movies")
}
else {
   console.log ( "not allowed into the movie")
}
if( 1 === "1" ) {
   console.log("Strict");
} else if( 1 == "1") {
   console.log("loose");
} else {
   console.log("not equal at all");
}
if( 1 <= 2 && 2 === 4 ) {
   console.log("yes");
} else {
   console.log("no");
}
console.log( typeof "dog");
if( typeof true === "boolean" ) {
   console.log("This is a boolean");
} else {
   console.log("This is not a boolean")
}
let name = "Billy";
if( typeof name !== "undefined" ) {
   console.log("This variable is defined");
} else {
   console.log("This variable is not defined")
}
if( "s" > 12 ) {
   console.log("This is True");
} else {
   console.log("This is False")
}
10 % 2 === 0 ? console.log("The number is Even") : console.log("The number is Odd")