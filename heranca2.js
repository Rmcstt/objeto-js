//cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // nao manipule esse cara a toa !!!
const avo = { attr1: 'a' }
const pai = { __proto__: avo, attr2: 'b', attr3: 3 }
const filho = { __proto__: pai, attr3: 'c' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerar(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de${this.velMax} km/h`
  }
}

const ferrari = {
  modelo: 'f40',
  velocidade: 350 // shadowing
}

const porsche = {
  modelo: '993',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro) //estabelece uma relacao, ferrari tem carro como prototipo
Object.setPrototypeOf(porsche, carro)

console.log(ferrari)
console.log(porsche)

porsche.acelerar(100)
console.log(porsche.status())

ferrari.acelerar(300)
console.log(ferrari.status())
