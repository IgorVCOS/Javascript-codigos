console.log(`Trabalhando com condicionais`);
// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

//listaDestinos.push(`Curitiba`) //ADICIONA UM ITEM NA LISTA

const idadeComprador = 17;
const estaAcompanhado = true;
const temPassagem = true;
//console.log(`Destinos possíveis: ${listaDestinos}`); // $ DEIXA COLOCAR A CONST NO TEXTO
console.log("Destinos possíveis:");
console.log(listaDestinos);


if(idadeComprador >= 18 || estaAcompanhado == true){ // || SERVE COMO "OU"
    console.log("comprador plausivel à venda");
    listaDestinos.splice(1,1); //REMOVE UM ITEM DA LISTA 
}else{
    console.log("não plausivel à venda!");
};

console.log("Embarque: /n "); // /N SERVE PARA PULAR LINHA
if(idadeComprador >= 18 && temPassagem == true){ // && SERVE COMO UM "E"
 console.log("Boa viagem!!")
} else {
    console.log ("você não pode embarcar");
};



//console.log(`Destinos possíveis:`); 
//console.log(listaDestinos[1], listaDestinos[0]); // SELECIONA UM ITEM ESPECIFICO DA LISTA

//ELSE IF É UM OPERADOR VÁLIDO