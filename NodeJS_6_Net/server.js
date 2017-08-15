// Crinado server

var net = require('net');

var connections = []; // Array para armazenar as conexões

var broadcast = function(message, origin){
	connections.forEach(function(connection){
		if(connection === origin) return;
		connection.write(message);
	});
};

net.createServer(function(connection){ // Retorno da conexão do server 

	connections.push(connection);
	// connection.write('Hello, I am the server!'); // Retorno para o client
	connection.on('data',function(message){ // Recebe uma função do client 
		var command = message.toString(); // Pegando o conteudo da mensagem
		if(command.indexOf('/nickname','') === 0){ // verificando se a primeira posição esta vazia
			var nickname = command.replace('/nickname ','');
			broadcast(connection.nickname + ' is now ' + nickname);
			connection.nickname = nickname;
			return;
		// console.log(message.toString());  Apresenta a mensagem enviada do client
		}
		broadcast(connection.nickname + '>' + message, connection);
	});
	connection.on('end', function(){
		broadcast(connection.nickname + ' has left! ', connection);
		broadcast.splice(connection.indexOf(connection), 1);
	});
}).listen(3000);