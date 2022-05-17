/*class pessoa {}

console.log(typeof pessoa)
*/
class Lancamento {
  constructor(nome = 'generico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}
class cicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }
  addLancamentos(...lancamentos) {
    // esse operador "(...ZZZZZZZZ)" aceita paramentros variados
    lancamentos.forEach(l => this.lancamentos.push(l))
  }
  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('salario', 5000)
const contaLuz = new Lancamento('Luz', -150)

const contas = new cicloFinanceiro(5, 2022)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario()) /// 485
