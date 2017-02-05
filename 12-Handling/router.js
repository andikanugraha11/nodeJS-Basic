function route(handle, pathname){
	console.log('request dari routing' + pathname);

	if(typeof handle[pathname] === 'function'){
		handle[pathname]();
	}else{
		console.log('tidak ada handle dari : '+pathname);
	}
}

exports.route = route;