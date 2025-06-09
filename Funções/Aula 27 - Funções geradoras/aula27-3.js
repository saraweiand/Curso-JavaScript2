function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5)
            break
    }
}

const itc = contador()

/*
for (let i = 0; i < 10; i++){
    console.log(itc.next().value)
}
*/

for(let c of itc){
    console.log(c)
}