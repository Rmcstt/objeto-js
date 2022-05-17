// Object.preventExtensions
const produto = Object.preventExtensions({
  ///essa funcao nao mermite que voce ecxtenda ela , ou seja, aumentar seus atributos
  nome: 'qualquer',
  preco: 1.99,
  tag: 'promocao'
})
console.log('extensivel:', Object.isExtensible(produto)) ///extensivel : false
console.log(produto) ///{ nome: 'qualquer', preco: 1.99, tag: 'promocao' }
produto.nome = 'borracha'
produto.descricao = 'borracha branca'
delete produto.tag

console.log(produto) ///{ nome: 'borracha', preco: 1.99 }

// Object.seal
const pessoa = { nome: 'robson', idade: 20 }
Object.seal(pessoa) // com essa funcao nao é possivel apagar e nem criar os atributos, ma é possivel alterar seus valores
console.log('selado:', Object.isSealed(pessoa)) /// selado : true

pessoa.sobreNome = 'mota'
delete pessoa.nome
pessoa.nome = 'renato'
pessoa.idade = 26
console.log(pessoa) ///{ nome: 'renato', idade: 26 }

// freeze == seal porem como freeze nao da para alterar os valores dos atributos
