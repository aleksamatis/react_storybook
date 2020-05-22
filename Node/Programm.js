const http = require("http");
const greeting = require("./greeting");
const saved = require('./data/saved');
http.createServer(function(request,response){
response.setHeader("Access-Control-Allow-Origin", "*");
response.end(request.url);
response.end(JSON.stringify(saved));
if (
	request.url == ('/data/saved.json'){
	response.end(JSON.stringify.json(saved));
	}
else {
	responce.statiscode = 404;
	response.end('not found');
	}
}).listen(3001, "127.0.0.1",function(){
console.log("Сервер начал прослушивание запросов на порту 3000");
});
