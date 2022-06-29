//all our element variables

var a = document.getElementById("hello");
var b = document.getElementById("box");
var c = document.getElementById("kelvin");





//function to convert our temperature to kelvin
function  toKelvin() {
// to define our input
var a = prompt("input a number to convert to kelvin");
// we convert our input to a number
var u = parseInt(a);
// definite value for kelvin
var definiteValue = 273
// we grab our box id in order for us to print the value on the box
var b = document.getElementById("box");
// to join input with its definite value
g = u + definiteValue;
// to print out the result on our div variable
var t = b.innerHTML = "the temperature in kelvin is " + g;
	
	
	
}



//function to convert our temperature to celsius
function  toCelsius() {
// to define our input
var a = prompt("input a number to convert to celsius");
// we convert our input to a number
var u = parseInt(a);
// definite value for kelvin
var definiteValue = 273
// we grab our box id in order for us to print the value on the box
var b = document.getElementById("boxc");
// to join input with its definite value
g = u - definiteValue;
// to print out the result on our div variable
var t = b.innerHTML = "the temperature in celsius is " + g;
	

}

{
//to greet our user
let a = prompt("hello whats your name");

let result = a + " you are welcome";
alert(result);
}	



	
	
