const pessoa = {
  nome: 'rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) //chaves
console.log(Object.values(pessoa)) // valores
console.log(Object.entries(pessoa)) //chaves e valores

Object.entries(pessoa).forEach(([chave, valor]) => {
  // "[]" destructuring
  console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '17/01/2021'
})

pessoa.dataNascimento = '10/12/2017'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign ES6

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // assign concatena o objeto

Object.freeze(obj)
obj.c = 1234
console.log(obj)
