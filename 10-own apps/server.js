var http = require('http');


function startServer(){
	function onRequest(req, res){
		console.log('Requested');
		res.writeHead(200,{"Content-Type": "text/plain"});
		res.write('Hello');
		res.end();
	}
	http.createServer(onRequest).listen(8888);
}

module.exports.startServer = startServer;