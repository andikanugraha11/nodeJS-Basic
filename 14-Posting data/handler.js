var querystring = require('querystring');

function home(response){
	console.log('Home Handler');
	var htmlFile = '<html>'+
						'<head>'+
							'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
						'</head>'+
						'<body>'+
							'<form action="/review" method="post">'+
							'<textarea name="text" rows="20" cols="60"></textarea>'+
							'<input type="submit" value="Submit text" />'+
							'</form>'+
						'</body>'+
					'</html>';
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(htmlFile);
	response.end();
}

function review(response, reviewData){
	console.log('review handler');
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write('Data review anda adalah : ' + querystring.parse(reviewData).text);
	response.end();
}

exports.home = home;
exports.review = review;