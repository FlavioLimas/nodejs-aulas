var http = require('http');
// Criando um servidor http
// request = obter
// response = retornar
http.createServer(function(req, res){
	res.write( // Retornando html
		'<!DOCTYPE html>' +
		'<html lang="en">' +
			'<head>' +
				'<meta charset="UTF-8">' +
					'<title>Hello World</title>' +
				'</head>' +
			'</head>' +
			'<body>' +
				'<h1>Hello World</h1>' +
			'</body>' +
		'</html>'
	);
	res.end(); // Encerrando o retorno
}).listen(3412);