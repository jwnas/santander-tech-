const numList = [25, 88, 71, 192, 333, 222, 10, 11, 62];
const parList = [];
const imparList = [];

let contador = 0;

while (contador < numList.length) {
  if (numList[contador] % 2 === 0) {
    parList.push(numList[contador]);
  } else {
    imparList.push(numList[contador]);
  }

  contador = contador + 1;
}

console.log({parList});
console.log({imparList});