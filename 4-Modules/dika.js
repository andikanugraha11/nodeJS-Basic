//Cara lama

// function nama(){
// 	console.log('Muhammad Andika Nugraha');
// }

// function lahir(){
// 	console.log('15 - Oktober - 1995');
// }

// module.exports.exportNama = nama;
// module.exports.lahir = lahir;

//Cara baru

module.exports = {
	tempatLahir : function(){
		console.log('Bandung');
	},
	umur		: function(){
		console.log('21');
	}
}