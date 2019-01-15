const escola = 'Cod3r'
console.log (escola.charAt(4)) // retorna carater na posição da string
console.log (escola.charAt(5)) // qyuando não tem a posição retorna vazio
console.log(escola.charCodeAt(3))//retorna valor ASCII na tabela unicode)
console.log(escola.indexOf('3'))//Retorna o indice na string de um caracter
console.log(escola.substring(1))//retorna substring a partir do indice 1
console.log(escola.substring(0,3)) // retora substring entre dois indices, incluindo o primeiro e excluindo o segundo
console.log ('Escola '.concat (escola).concat('!')) // concatenar strings com função concat
console.log ('escola ' + escola + '!') // Concatenar com o caracter de concatenação
console.log(escola.replace('3','e')) // substirui o caracter passado como primeiro parametro pelo segundo parametro passado

console.log ('Ana, MAria, Teste'.split(',')) // Transforma a String em uma Array usando o delinitador informado


