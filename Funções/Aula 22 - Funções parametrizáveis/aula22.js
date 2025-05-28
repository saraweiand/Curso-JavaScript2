let valor = 0

console.log(valor)

function add(v){
    return valor + v
}

valor = add(10)
console.log(valor)

valor = add(5)
console.log(valor)









const valor_padrao = 0

function soma(n1=valor_padrao,n2=valor_padrao){
    let res
    res = n1 + n2
    return res
}

let resultado_soma = soma(5)
console.log(resultado_soma)