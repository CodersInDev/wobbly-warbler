
var warblers = {};

warblers["GET /"] = function (request, response) {
	response.write("this is my first url");
	response.end();
};

warblers["GET /warbles"] = function (request, response) {
	response.write("list of warbles")
	response.end();
};

warblers.generic = function (request, response) {
	console.log('all other requests');
};

module.exports = warblers;