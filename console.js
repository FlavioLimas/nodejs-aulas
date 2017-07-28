/*
Criando e escrevendo em arquivos
O comando abaixo:
console.js 1> out.log 2> error.log
console.js 1> direciona toda a saida output para o arquivo out.log
out.log 2> direcina toda a saida do output para o arquivo error.log
*/
var konsole = {
	log: function(msg){
		process.stdout.write(msg + '\n');
	},
	error:function(msg){
		process.stderr.write(msg + '\n');
	}
};

konsole.log('stdout');
konsole.error('stderr');
/*!! -> Dupla negação -> Revela o conteúdo boleano e caso não seja retorna undefined */
konsole.log('A TTY: ' + !!process.stdout.isTTY);
konsole.error('B TTY: ' + !!process.stderr.isTTY);