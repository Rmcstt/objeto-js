//coleção dinamica de pares chave e valor
const produto = new Object()
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'a4',
  valor: 890000,
  proprietario: {
    nome: 'raul',
    idade: 56,
    endereco: {
      logradouro: 'rua abc',
      numero: 123
    }
  },
  condutores: [
    {
      nome: 'junior',
      idade: 19
    },
    {
      nome: 'ana',
      idade: 42
    }
  ],
  calcularSeguro: function () {
    //...
  }
}

carro.proprietario.endereco.numero = 1000

delete carro.condutores

carro['proprietario']['endereco']['logradouro'] = 'cba'
console.log(carro)
