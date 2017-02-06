function route(handle, pathname, response, dataReview){
	console.log('request dari routing' + pathname);

	if(typeof handle[pathname] === 'function'){
		handle[pathname](response, dataReview);
	}else{
		console.log('tidak ada handle dari : '+pathname);
		response.writeHead(404, {"Content-Type":"text-plain"});
		response.write("404 : Halaman tidak ditemukan");
		response.end();
	}
}

exports.route = route;