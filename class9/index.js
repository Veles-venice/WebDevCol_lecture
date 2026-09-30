const process = require('process')

require('dotenv').config();
// const data = process.env.PORT;
//const PORT = process.env.PORT || 5000;
//console.log(process);

const http = require('http')
const PORT = process.env.PORT || 5000;

const server = http.createserver((req, res) => {
	if(req.url == '/'){
		res.writeHead(200, { 'Content-Type' : 'text/html'});
		res.write('<h1>Hello, World!<h1>');
		res.write('<p>This is a simple HTTP server. </p>');	
		res.end();
	}
	else{
		res.writeHead(404, {'Content-Type' : 'application/json' });
		res.end(JSON.stringify({ error: 'Route not found' }));
	};
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
