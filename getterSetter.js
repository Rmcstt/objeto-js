const sequencia = {
  _valor: 1, //variavel pretendida ser acessada internamemte "convencao"
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor) // 1 2

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // 1000 1001
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // 1002 1003

// getter and setter servem para ter um controle maior sobre o emcapsulamento
