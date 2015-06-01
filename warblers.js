var warblers = {endpoints: {},
	list:[{id: 1, content: "first warble", timestamp: "2015/06/01"}]
};


warblers.endpoints["GET /"] = function (request, response) {
	response.write(JSON.stringify(warblers.list));
	console.log(JSON.stringify(warblers.list));
	response.end();
};

warblers.endpoints["GET /warbles"] = function (request, response) {
	response.write(JSON.stringify(warblers.list));
	console.log(JSON.stringify(warblers.list));
	response.end();
};

warblers.endpoints.generic = function (request, response) {
	console.log('all other requests');
};




module.exports = warblers;