var Fs = require('fs');


//Stream data read
var readableStream = Fs.createReadStream('input.txt');
var data = '';

readableStream.setEncoding('UTF8');
readableStream.on('data',function(baca){
	data += baca;
});
readableStream.on('end',function(){
	console.log(data);
});

//Stream data create
var writeData = "Hello";
var writeableStream = Fs.createWriteStream('outpu.txt');
writeableStream.write(writeData,'UTF8');
writeableStream.end();
writeableStream.on('finish',function(){
	console.log("Selesai");
});