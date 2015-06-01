var listWarbles = [{id: 1, content: "first warble", timestamp: "2015/06/01"}];
var warblers = {};
var fs = require('fs');

warblers["GET /"] = function (request, response) {
	fs.readFile(__dirname + "/index.html", function (err, data){
		response.write(data.toString());
		response.end();
	});
};

warblers["GET /warbles"] = function (request, response) {
	response.write(JSON.stringify(listWarbles));
	response.end();
};

warblers.generic = function (request, response){
	fs.readFile(__dirname + request.url, function (err, data){
		if(err){
			fs.readFile(__dirname + "/404.html", function (err, data){
				response.write(data.toString());
				response.end();
			});
		}else{
			response.write(data.toString());
		}
	});
};

module.exports = warblers;
