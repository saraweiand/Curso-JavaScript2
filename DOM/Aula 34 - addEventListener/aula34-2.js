const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        console.log(evt) // usado para verificar o target no concole
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.id + " foi clicado")
        console.log(el.classList + " foi clicado")
        console.log(el.innerHTML + " foi clicado")
    })
})
