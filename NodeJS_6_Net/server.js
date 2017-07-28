// Crinado server

var net = require('net');

var connections = []; // Array para armazenar as conexões

var broadcast = function(message){
	connections.forEach(function(connection){
		connection.write(message);
	});
};

net.createServer(function(connection){ // Retorno da conexão do server 
	connection.write('Hello, I am the server!'); // Retorno para o client
	connections.push(connection);
	connection.on('data',function(message){ // Recebe uma função do client 
		broadcast(message);
		console.log(message.toString()); // Apresenta a mensagem enviada do client
	});
}).listen(3000);