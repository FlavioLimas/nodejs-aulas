var net = require('net');
// Conectando ao server; podendo ser um objeto com host e a porta exemplo: net.connect({host:'127.0.0.1',port:3000})
var client = net.connect(3000);
// Função que recebe o retorno do server e escreve
client.on('data',function(message){
	console.log(message.toString());
});
// Função que escreve no server
client.on('connect',function(){
	client.write('Hello, I am the client!');
});
// Função que le dados do teclado valida para saber se não é nulo, substitui a linha em branco e escreve na porta de saida
process.stdin.on('readable',function(){
	var message = process.stdin.read();
	if(!message) return;
	message = message.toString().replace(/\n/,'');
	client.write(message);
});