// import do modulo
// var http = require('http');
var router = require('./router'); // esta vindo através do module.exports

var app = router(3412);
var operadoras = [
	{nome:"Oi",codigo:14,categoria:"Celular",preco:2},
	{nome:"Vivo",codigo:15,categoria:"Celular",preco:1},
	{nome:"Tim",codigo:41,categoria:"Celular",preco:3}
];

var contatos = [
	{id:1,nome:"Bruno",telefone:"9999-2222",data:new Date(),operadora:operadoras[0]},
	{id:2,nome:"Sandra",telefone:"9999-3333",data:new Date(),operadora:operadoras[1]},
	{id:3,nome:"Mariana",telefone:"9999-9999",data:new Date(),operadora:operadoras[2]}
];

app.get('/operadoras', function(req,res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/contatos',function(req,res){
	res.write(JSON.stringify(contatos));
	res.end();
});

app.post('/contatos', function(req, res){
	res.end();
});
// criando uma server e setando uma porta
/*http.createServer(function(req,res){
	 res.setHeader('Access-Control-Allow-Origin','*'); Setando o Header da resposta para que aceite qualquer alteração como porta e ou protocolo
	if (req.url === '/operadoras') 
	if (req.url === '/contatos') res.write(JSON.stringify(contatos));
	res.end();
}).listen(3412);*/