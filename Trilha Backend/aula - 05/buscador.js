const contactList = ["Sheldon", "Amy", "Leonard", "Pene", "Raj", "Haward", "Bernadet"];

let buscarUsuario = false;
let fimDaLista = false
let indiceUsuario = 0;

/*
while (!buscarUsuario && !fimDaLista) {
    const usuarioAtual = contactList[indiceUsuario]
    if (usuarioAtual.startsWith("H")) {
        buscarUsuario = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    indiceUsuario = indiceUsuario + 1;

    if (indiceUsuario === contactList.length) {
        fimDaLista = true
        console.log(`Usuário não encontrado`)
    }
}
    */

while (true) {  // segundo tipo de solução
    const usuarioAtual = contactList[indiceUsuario]
    if (usuarioAtual.startsWith("H")) {
        console.log(`Usuário encontrado: ${usuarioAtual}`)
        break
    }
    indiceUsuario = indiceUsuario + 1;

    if (indiceUsuario === contactList.length) {
        console.log(`Usuário não encontrado`)
        break
    }
}