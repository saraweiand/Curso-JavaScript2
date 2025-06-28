//const c1 = document.getElementById("c1")
const c1 = document.querySelector("#c1")

const msg = () => {
    alert("clicou")
}

c1.addEventListener("click", msg)

c1.addEventListener("click",()=>{
    alert("clicou2")
    // msg()
})


// c1.addEventListener("click", (evt) => {
//     const el = evt.target
//     el.classList.add("destaque")  // adiciona um evento a classe
// })