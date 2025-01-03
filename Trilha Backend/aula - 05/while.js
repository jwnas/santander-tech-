const usuarios = ["Sheldon", "Amy", "Leonard", "Pene", "Raj"]

/*
console.log("Olá", usuarios[0])
console.log("Olá", usuarios[1])
console.log("Olá", usuarios[2])
console.log("Olá", usuarios[3])
*/

let indiceUsuario = 0

while (indiceUsuario < usuarios.length) {
    console.log("Olá", usuarios[indiceUsuario])
    // indiceUsuario = indiceUsuario + 1
    indiceUsuario += 1
}