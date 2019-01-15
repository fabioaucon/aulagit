const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome +'!'
//Iniciando com ` a string considera as querbas de linhas, espaços,tabulações,. etc
const template =`   
Olá
${nome}!`
console.log(concatenacao)
console.log(template)

//expressoes

console.log(`1 + 1 =  ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
