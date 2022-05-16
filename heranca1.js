const ferrari = {
  modelo: 'f40',
  velocidade: 350
}

const porsche = {
  modelo: '993',
  velocidade: 320
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(porsche.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype) // objetos em JS tem a referencia de um objeto prototipo
