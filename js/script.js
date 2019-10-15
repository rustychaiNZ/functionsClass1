console.log('Introduction into Javascript functions');

/* 
* Function is a small program that enables easy debugging
* Enables a team to work with modular programming techniques
* A function must be difned and called as per the requirements
* Function names are written meaningfully with camelCase
* Normally used for a single pupose
*/

// Defining function
function displayInfo() {
	document.getElementById('result').innerHTML += 'Learning JS Functions';
}

// The function won't be displayed if it is not called within the code
displayInfo();


// passing parameter or value inside the function
function greetMe(name) { //name is a dummy variable
	document.getElementById('grettings').innerHTML += '<b>Howdy</b> ' + name + '!<br>';
}

greetMe('Russell'); //actual argument or paramater 
greetMe('Yoobee');
greetMe('Beula');
greetMe('New Zealand');

// Returning value

function totalExpense(f, t, b) {
	// 'gt' is a local variable has local scope
	// Avalibable only inside the function
	var gt = f + t + b;
	return gt; // Returns the value to the location where the function is called
}

var food = 100;
var transport = 125;
var bills = 255;

var grandTotal = totalExpense(food, transport, bills); // Parameter should correspond in order and type of data

document.getElementById('tExpense').innerHTML = 'The Grand Total you owe is $' + grandTotal;

document.getElementById('tExpense').innerHTML += '<br> The average is $' + (totalExpense(50,38,40)/3).toFixed(2);


// Variable total has global scope
var total = 345;
function averageExpense(total) {
	var myAverage = (total/3); // local
	return myAverage;
}
document.getElementById('tExpense').innerHTML += '<br>The average from the new function is $' + averageExpense(total);

var myAverage = 200; // Global
console.log(myAverage);

function anotherFunction() {
	var myAverage = 0;
	console.log(myAverage);
}

anotherFunction();

// 5 times table
document.getElementById('tables').addEventListener('click' , function(){
	for(var i=1; i<=20; i++){
		var mult5 = 5 * i;
		document.getElementById('tabelsOutput5').innerHTML += '<br> 5 x ' + i + ' = ' + mult5;
	} // Loop end
	for(var j=1; j<=20; j++) {
		var mult6 = 6 * j;
		document.getElementById('tabelsOutput6').innerHTML += '<br> 6 x ' + j + ' = ' + mult6;
	}
}) // Event listener end




























