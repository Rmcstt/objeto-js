console.log(typeof String) ///function
console.log(typeof Array) ///function
console.log(typeof Object) ///function

String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

console.log('string ao contrario'.reverse()) ///oirartnoc oa gnirts

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4, 5, 6, 7, 8].first()) ///1
console.log(['a', ' b', 'c', 'd', 'e', 'f', 'g'].first()) ///a

// o porque de tomar cuidade de colocar funcoes em prototype

String.prototype.toString = function () {
  return 'lascou'
}

console.log('renato'.reverse()) /// "uocsal"
