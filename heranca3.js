const pai = { nome: 'renato', corCabelo: 'preto' }

const filha = Object.create(pai)

filha.nome = 'luna'

console.log(filha.corCabelo) //preto

const filho = Object.create(pai, {
  nome: { value: 'atos', writable: false, enumerable: true }
})

console.log(filho.nome) //atos
filho.nome = 'akhbsxkdjh' // por conta do  "writable" false ele nao deixa escrever por cima
console.log(`${filho.nome} tem cabelo ${filho.corCabelo}`) // atos tem cabelo preto

console.log(Object.keys(filha)) //['nome']
console.log(Object.keys(filho)) //['nome']

for (let key in filho) {
  filho.hasOwnProperty(key) // hasOwnProperty() serve para confirmar se um determinado atributo veio por heranca
    ? console.log(key) //nome
    : console.log(`por heranca : ${key}`) //por heranca: corCabelo
}
