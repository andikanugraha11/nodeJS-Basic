/**
** Author		: Andika Nugraha
** File Name	: app.js
** Description	: Global Function
** Date			: 4/2/2017
*/


function cetakkTimeOut(){
	console.log("Tulisan ini akan muncul setelah 5 detik");
}

function cetakInterval(){
	console.log("Tulisan ini akan muncul setiap 2 detik")
}

//Mencetak nama file;
console.log(__filename);

//Mencetak letak directori file
console.log(__dirname);

//Memanggil fungsi setelah 5000ms
setTimeout(cetakkTimeOut, 5000);

//Memanggil fungsi setiap 2000ms
setInterval(cetakInterval, 2000);