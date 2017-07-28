/*
// Percorrendo e imprimindo todos os processos

process.argv.forEach(function(value){
	console.log(value);
});
*/
var help = require('../nodejs/exemplo/NodeJS_5_Process/help');
var options = process.argv.slice(2); /*Pegando a partir da segunda posição do array*/
if(options.length < 1){
	return;
}
switch(options[0]){
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
	default:
		help.showOptions();
}