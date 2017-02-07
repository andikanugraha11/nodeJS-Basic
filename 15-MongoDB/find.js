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

		collection.find().toArray(function(err,res){
			if(err){
				console.log(err);
			}else if(res.length){
				console.log(res);
			}else{
				console.log('data tidak ditemukan');
			}
			db.close();
		});
	}
});