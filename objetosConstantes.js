//pessoa -> 123 -> (...)
const pessoa = { nome: 'joao' }
pessoa.nome = 'pedro'
console.log(pessoa.nome)
// pessoa -> 456 -> (...)
//pessoa = { nome: 'ana' }

Object.freeze(pessoa)
pessoa.nome = 'maria'

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'joao' })
pessoaConstante.nome = 'maria'
console.log(pessoaConstante.nome)
