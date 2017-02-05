var Fs = require('fs');


//Asynchronous
Fs.readFile('input.txt',function(error, data){
	if (error){
		console.log(error);
	}else{
		console.log("isi dari Async data adalah :" + data.toString());
	}
});

// Synchronous
var data = Fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Akhir');