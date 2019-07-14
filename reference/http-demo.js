const http = require('http');

// Create server object
http.createServer((req, res) => {
	// Write a response
	res.write('<h1>Hello World</h1>');
	res.end();
}).listen(5000, () => {
	console.log('Server Running');
});
