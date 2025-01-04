const numList = [33, 131, 151, 555, 222, -21, -56];
const usuarios = ["Sheldon", "Leonard"];

// código imperativo
for (let contador = 0; contador < numList.length; contador ++) {
    console.log(numList[contador]);
}

// como seria usando o while
let indiceNum = 0
while (indiceNum < numList.length) {
    console.log(numList[indiceNum])
    indiceNum ++;
}

// código declarativo
for (const num of numList) {
    console.log(num);    
}

for (const usuario of usuarios) {
    console.log(usuario);
}