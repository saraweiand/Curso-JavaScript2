function canal(){
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if(res % 2 == 0)
        return "Par"
    else
        return "Ímpar"
    
}

let num = canal() // armazena o return da função canal()

console.log(canal()) // imprime no console