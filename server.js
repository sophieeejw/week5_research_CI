const http = require('http');
const router = require('./router');
const port = process.env.port || 3000;
const hostname = process.env.hostname || 'localhost';




http.createServer(router).listen(port,hostname, ()=>{ 
	console.log(`Server listening on port http://${hostname}:${port}`);});

