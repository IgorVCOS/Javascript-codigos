import { cliente } from "./Cliente.js";

export class contaCorrente {
 static numeroDeContas = 0;
  agencia;
  _cliente; // _ SERVE PRA INFORMAR QUE VALOR NÃO DEVE SER ALTERADO
  set cliente(novoValor) {
    if (novoValor instanceof cliente) { // INSTANCIA DE CLIENTE
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  #saldo = 0; //CERQUILHA SERVE PARA DEIXAR "PRIVADO"
  // O VALOR DEVE SER ATRIBUIDO DENTRO DA CLASSE
  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor; // THIS SERVE PRA PEGAR UM VALOR DENTRO DA CLASSE
      return valor;
    }
  }

 get saldo(){ //GET SERVE PARA PEGAR E MOSTRAR O VALOR, NÃO SERVE PARA ALTERAR
  return this.#saldo;
 }

 constructor(cliente, agencia){
  this.agencia = agencia;
  this.cliente = cliente;
  contaCorrente.numeroDeContas++;
 }

  depositar(valor) {
    // IF (VALOR <= 0) RETURN;  TAMBÉM PODE SER FEITO DESSE JEITO SE SÓ TIVER 1 COMANDO
    if (valor <= 0) {
      return; //VAI RETORNAR AO ESTADO INICIAL
    }
    this.#saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
