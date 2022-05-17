function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

const aula1 = new Aula('bem vindo', 123)
const aula2 = new Aula('fundamentos', 234)

console.log(aula1, aula2) ///Aula { nome: 'bem vindo', videoID: 123 } Aula { nome: 'fundamentos', videoID: 234 }

//simulando "new"

function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)
  return obj
}

const aula3 = novo(Aula, 'fundamentos2', 345)
const aula4 = novo(Aula, 'fundamentos3', 456)

console.log(aula3, aula4) ///Aula { nome: 'fundamentos2', videoID: 345 } Aula { nome: 'fundamentos3', videoID: 456 } exatamente igual
