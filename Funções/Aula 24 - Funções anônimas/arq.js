let teste = function(...valores){
    let res = 0
    for (v of valores){
        res += v
    }
    return res
}

console.log(teste(10,5))

let teste2 = new Function("v1", "v2", "return v1 + v2")
console.log(teste2(10,5))