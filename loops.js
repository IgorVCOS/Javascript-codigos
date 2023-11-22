console.log(`Trabalhando com condicionais`);


const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

//listaDestinos.push(`Curitiba`) //ADICIONA UM ITEM NA LISTA

const idadeComprador = 17;
const estaAcompanhado = true;
let temPassagem = false;
const destino = "Curitiba";
//console.log(`Destinos possíveis: ${listaDestinos}`); // $ DEIXA COLOCAR A CONST NO TEXTO
console.log("Destinos possíveis:");
console.log(listaDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;


let contador = 0
let destinoExiste = false;
while (contador < 3) {

    if (listaDestinos[contador] == destino) {
        destinoExiste = true;
        break; //SERVE PARA PARAR O CODIGO
    } else {
        destinoExiste = false;
    }
    contador++; // += 1 É UMA FORMA DIFERENTE DE DEFINIR
}

console.log("Destino existe:", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("compra impossibilitada");
};

// for (let cont; cont < 3; cont++) {
//     if (listaDestinos[contador] == destino) {
//         destinoExiste = true;
//         break; //SERVE PARA PARAR O CODIGO
//     } else {
//         destinoExiste = false;
//     }
// }


