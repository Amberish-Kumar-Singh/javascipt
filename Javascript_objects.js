var choice=prompt("Enter the fruit name which colour you wish to know from the listed fruit in the page :","Apple");
// object creation
var fruits = {
	Apple:"red", Strawberry:"red", Orange : "orange",Papaya:"green"
}
document.write("The colour of " + choice + " is " + fruits[choice]);
