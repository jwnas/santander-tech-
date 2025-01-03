if (true) {
    console.log("Sempre aparecerei.")
}

if (false) {
    console.log("Nunca aparecerei.")
}

// or/ou: ||
// and/e: &&

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false) // só retornará falso no caso dos dois termos serem falsos.

console.log(true && true) // só retornará verdadeiro no caso dos dois termos serem verdadeiros.
console.log(true && false)
console.log(false && true)
console.log(false && false)