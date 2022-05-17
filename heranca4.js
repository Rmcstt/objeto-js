function meuObjeto() {}
console.log(meuObjeto.prototype) /// {}

const obj1 = new meuObjeto()
const obj2 = new meuObjeto()

console.log(obj1.__proto__ === obj2.__proto__) /// true
console.log(meuObjeto.prototype === obj2.__proto__) /// true

meuObjeto.prototype.nome = 'anonimo'
meuObjeto.prototype.falar = function () {
  console.log(`bom dia! meu nome é ${this.nome}`)
}

obj1.falar() /// bom dia ! meu nome é anonimo

obj2.nome = 'jow'
obj2.falar() /// bom dia! meu nome é jow

const obj3 = {}

obj3.__proto__ = meuObjeto.prototype

obj3.nome = 'damaris'

obj3.falar() ///bom dia! meu nome é damaris

// resumindo

console.log(new meuObjeto().__proto__ === meuObjeto.prototype) ///true
console.log(meuObjeto.__proto__ === Function.prototype) ///true
console.log(
  Function.prototype.__proto___ === Object.prototype
) /* /// false , // no curso deu true, preciso revisar as novas tecnologias JS para entender essa divergencia*/
console.log(Object.prototype.__proto__ === null) ///true
