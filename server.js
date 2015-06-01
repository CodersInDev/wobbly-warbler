var http = require("http");
var warblers = require("./warblers.js");

http.createServer(function (request, response) {
	console.log('server is running');
	console.log(request.url);

	var warbler = warblers.endpoints[request.method + " " + request.url];
	
	if (warbler) {
		warbler(request, response);
	} else {
		warblers.endpoints.generic(request, response);
	}

}).listen(8000);