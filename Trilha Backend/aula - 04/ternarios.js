const idade = 18
const CNH = true

const podeDirigir = idade >= 18 && CNH

if (podeDirigir) {
    console.log("Pessoa está habilitada para conduzir veículo.")
} else {
    console.log("Pessoa não está habilitada para conduzir veículo.")
}

const numDePassageiros = podeDirigir ? 4 : 0 // ternário que subistitui o bloco de código abaixo

/*

let numDePassageiros

if (podeDirigir) {
  numDePassageiros = 4
} else{
  numDePassageiros = 0
}

*/

console.log({numDePassageiros})