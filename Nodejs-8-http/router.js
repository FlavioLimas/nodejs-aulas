var http = require('http');

var createRouter = function(port){

	var api = {};
	var routes = {};
	var methods = ['GET', 'POST', 'OPTIONS'];
	var interceptors = [];
	methods.forEach(function(method) {
		routes[method] = {};
		api[method.toLowerCase()] = function(path, fn){
			routes[method][path] = fn;
		};
	});

	// Interceptando as respostas das requisições
	api.interceptor = function(interceptor){
		interceptors.push(interceptor);
	};

	var executeInterceptors = function(number, req, res){
		var interceptor = interceptors[number];
		if(!interceptor) return;
		interceptor(req, res, function(){
			executeInterceptors(++number, req, res);
		});
	};
	// Fim do Interceptor

	http.createServer(function(req,res){
		executeInterceptors(0, req, res);
		if(!routes[req.method][req.url]){
			res.statusCode = 401;
			return res.end();
		}
		routes[req.method][req.url](req, res);
	}).listen(port);

	return api;
};

module.exports = createRouter;