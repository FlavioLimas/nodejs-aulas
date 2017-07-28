/*
// Percorrendo e imprimindo todos os processos

process.argv.forEach(function(value){
	console.log(value);
});
*/
var help = require('../nodejs/exemplo/NodeJS_5_Process/help');
var keyboard = require('../nodejs/exemplo/NodeJS_5_Process/keyboard');

keyboard.onReadable(function(option){
	switch(option){
		case 'a':
			console.log('pid: ' + process.pid);
			break;
		case 'b':
			console.log('title: ' + process.title);
			break;
		case 'c':
			console.log('arch: ' + process.arch);
			break;
		case 'd':
			console.log('platform: ' + process.platform);
			break;
		case 'e':
			console.dir(process.env); // console.dir -> Exibe as propriedades do objeto
			break;
		case 'm':
			console.log(process.memoryUsage());
			break;
		case 'u':
			console.log('uptime ' + process.uptime()); // tempo em que o processo é executado
			break;
		case 'v':
			console.dir(process.versions); // Verificando versões do node, V8, SSL entre outros
			break;
		case 'q':
			process.exit(0);
		default:
			help.showOptions();
	}
});

process.on('exit', function(){ // Interceptando apartir da chamada da funcão exit
	console.log('Bye');
});



process.on('uncaughtException', function(){ // Intercepta a exceção e prossegue com a execução do codigo
	console.log('error');
});

a.b(); // Chamada de função que lançará a excessão