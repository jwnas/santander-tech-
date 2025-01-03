//introdução
// var teste (hoisting)
console.log(teste)
var teste = "Meu teste"

const qualquerCoisa = null
console.log(qualquerCoisa)

let numero = 20
const numero2 = 300 //inteiro
const numeroFavorito = 500000000.1 //real
const estaChovendo = false
const nome = "Jonas"

console.log(numero)
console.log(numero2)

numero = 8
console.log(numero)

console.log("Oi,", nome, "!")
console.log(`Ói, ${nome}! Seu número favorito é: ${numeroFavorito}.`)

//coerção/conversão implicita
const num1 = 10
const num2 = 30
const num3 = 2
const num4 = 3

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2
const restoDaDivisao = num1 % num2
const elevado = num3 ** num4 // ou const elevado = Math.pow(2, 3)
const nan = num1 - "ab"

const numeroNegativo = -3
const numeroAbsoluto = Math.abs(numeroNegativo)

console.log({soma})
console.log({subtracao})
console.log({multiplicacao})
console.log({divisao})
console.log({restoDaDivisao})
console.log({elevado})
console.log(nan)

console.log({numeroNegativo})
console.log({numeroAbsoluto})