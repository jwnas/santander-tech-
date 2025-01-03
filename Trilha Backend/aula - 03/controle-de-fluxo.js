const num1 = 100
const num2 = 20
const num3 = 30
const num4 = 30

//comparações condicionais
if (num1 > 1){
    console.log("Este número é maior que 1.")
}

if (num1 > 200){
    console.log("Este número é maior que 200.")
} else {
    console.log("Este número é menor ou igual a 200.")
}

if (num2 <= num1) {
    console.log(`${num2} é menor que ${num1}.`)
}

// verificação de igualdade de valores
if (num3 == num4) {
    console.log("Os numeros são iguais em valor (podendo ocorrer coerções implicitas com este tipo de comparação).")
}

if (num3 === num4) {
    console.log("Os numeros são iguais em valor e tipo.")
}