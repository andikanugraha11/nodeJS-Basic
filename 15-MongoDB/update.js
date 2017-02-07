var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/coba";

mongoClient.connect(url, function(err, db){
	if(err){
		console.log(err);
	}else{
		console.log('connect to : ', url);
		var collection = db.collection('biodata');

		var data1 = {
						nama 	: "Andika",
						umur	: 21
					};
		var data2 = {
						nama 	: "Dika",
						umur	: 17
					};

		collection.update({'nama' : 'Dika'},{$set: {'umur':20}}, function(err,res){

			if(err){
				console.log(err);
			}else{
				console.log('data berhasil di update');
			}
			db.close();
		});
	}
});