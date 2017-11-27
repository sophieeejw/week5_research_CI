

const router = (request, response) => {

	console.log(request.url);

	if(request.url==='/'){
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write('hello');
		response.end();
	}
	else if (request.url === '/blog' && request.method === 'GET'){
		response.writeHead(200, {'Content-Type':'text/html'});
		let jsonObj = JSON.stringify(['dog', 'cat', 'lion']);
		response.write(jsonObj);
		response.end();
	}
	else{
		response.writeHead(404,{'Content-Type':'text/html'});
		response.end('url not found');
	}
}



module.exports = router;
