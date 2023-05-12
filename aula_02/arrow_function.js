const soma = (n1,  n2) => {
let resultado = n1 + n2
console.log(resultado)
}
soma(1234, 877)

const soma2 = (n1, n2) => n1 + n2
console.log(soma2(10, 20))

//const media = (n1,n2) => (n1+n2)/2
const media = (n1,n2) => soma2(n1,n2)/2
console.log(media(200, 300))