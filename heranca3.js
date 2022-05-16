const pai = { nome: 'renato', corCabelo: 'preto' }

const filha = Object.create(pai)

filha.nome = 'luna'

console.log(filha.corCabelo)

const filho = Object.create(pai, {
  nome: { value: 'atos', writable: false, enumerable: true }
})

console.log(filho.nome)
filho.nome = 'akhbsxkdjh' // por conta do  "writable" false ele nao deixa escrever por cima
console.log(`${filho.nome} tem cabelo ${filho.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filho))

for (let key in filho) {
  filho.hasOwnProperty(key) // hasOwnProperty() serve para confirmar se um determinado atributo veio por heranca
    ? console.log(key)
    : console.log(`por heranca : ${key}`)
}
