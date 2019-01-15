const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[0], valores [3])

console.log (valores[4])// recupera Indefinido para indice fora da matriz

valores [4] =10 // adiciona um indice específico à matriz
console.log(valores)

console.log(valores.length) // retorna tamanh da matriz

valores.push({id:3}, false, null, 'teste') // adiciona itens a matriz
console.log(valores)

console.log(valores.pop()) // remove o ultimo elemento e or retorna

delete valores[0] // deleta o valor de um indice
console.log(valores)
console.log(typeof valores) // em JS uma array é um objeto


