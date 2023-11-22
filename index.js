

import { cliente, Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

// ARQUIVOS QUE COMEÇAM COM LETRA MAISCULA REPRESENTAM CLASSES
//NPM INIT

const cliente1 = new cliente( "Ricardo", 11122233309 ); // CONSTRUTOR FAZ ISSO
const cliente2 = new cliente("Alice", 888222 );

// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;


// cliente2.nome = "Alice";
// cliente2.cpf = 888222;

let numeroDeContas = 0

const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);
numeroDeContas++;
contaCorrenteRicardo.depositar(500);
const contaCorrenteAlice = new contaCorrente(cliente2, 2002);
numeroDeContas++;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log(conta2.cliente);

console.log(contaCorrenteRicardo);

// contaCorrenteRicardo.#saldo = 0; nao funciona pois deixa oculto
// O SALDO CONTINUA EXISTINDO, MAS NÃO PODEMOS VER O VALOR INICIAL
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;

// //console.log(contaCorrenteRicardo.saldo); //SÓ VIZUALIZA O SALDO
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(200);
// contaCorrenteRicardo.depositar(-1); // NÃO FUNCIONA
// console.log(contaCorrenteRicardo.saldo)

// const conta2 = new contaCorrente;
// conta2.cliente = cliente1;
// conta2.agencia = 2002;

// const conta2 =  new contaCorrente;
// //conta2.cliente = null; NULL SERVE PARA ANULAR OU NÃO ATRIBUIR VALOR
// conta2.cliente = new cliente;
// conta2.cliente.nome= "Alice";
// conta2.cliente.cpf = 888222;

// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(`O valor sacado é:` + valorSacado);



// console.log(contaCorrenteRicardo.saldo);

// contaCorrenteAlice.cliente = cliente2;
// contaCorrenteAlice.agencia = 102;

// console.log(cliente1);
// console.log(cliente2);

