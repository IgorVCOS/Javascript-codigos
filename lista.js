console.log(`Trabalhando com listas`);
// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`) //ADICIONA UM ITEM NA LISTA

console.log(`Destinos possíveis: ${listaDestinos}`);  


listaDestinos.splice(1,1); //REMOVE UM ITEM DA LISTA
console.log(`Destinos possíveis:`); 
console.log(listaDestinos[1], listaDestinos[0]); // SELECIONA UM ITEM ESPECIFICO DA LISTA