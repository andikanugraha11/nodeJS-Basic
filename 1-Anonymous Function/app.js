/**
** Author		: Andika Nugraha
** File Name	: app.js
** Description	: Anonymous Function
** Date			: 4/2/2017
*/


//Deklarsi fungsi cara 1
function printText(text){
	console.log(text);
}

//Deklarasi fungsi cara 2
var printNumber = function(number){
	console.log(number);
}

//Anonymous function
function printSomething(func,values){
	func(values);
}

// Panggil fungsi secara langsung
console.log("------------ Langsung --------------");
printText("Hello World");
printNumber(4);

// Panggil Fungsi secara anonymous
console.log("------------ Anonymous -------------");
printSomething(printText,"Andika Nugraha");
printSomething(printNumber,10);


//Note : Anonymous function secara tidak langusng
printSomething(function(par){
	console.log(par)
},"Hello");