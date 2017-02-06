var http	= require('http');
var url		= require('url');

function startServer(route, handle){
	function onRequest(req, res){
		var dataReview = '';
		var pathname = url.parse(req.url).pathname;
		console.log('Requested dari server' + pathname);
		req.setEncoding('UTF8');

		req.addListener("data", function(isi){
			dataReview += isi;
		})

		req.addListener("end",function(){
			route(handle, pathname, res, dataReview);
		})
		
	}
	http.createServer(onRequest).listen(8888);
}

module.exports.startServer = startServer;