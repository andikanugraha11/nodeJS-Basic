var http	= require('http');
var url		= require('url');

function startServer(route){
	function onRequest(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log('Requested dari' + pathname);
		route(pathname);
		res.writeHead(200,{"Content-Type": "text/plain"});
		res.write('Hello');
		res.end();
	}
	http.createServer(onRequest).listen(8888);
}

module.exports.startServer = startServer;