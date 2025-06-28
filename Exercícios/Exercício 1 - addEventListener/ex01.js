const curso = [...document.querySelectorAll(".opcoes")]
const copiar = document.getElementById("copiar")
const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")

let opcoesSelecionadas = []

curso.forEach((opcao) => {
    opcao.addEventListener("click", () => {
        opcao.classList.toggle("selecionada")
        if (opcao.classList.contains("selecionada")){
            opcoesSelecionadas.push(opcao)
            opcao.classList.add("destaque")
        } else {
            opcoesSelecionadas = opcoesSelecionadas.filter(item => item !== opcao)
            opcao.classList.remove("destaque")
        }
    })
})

copiar.addEventListener("click", () => {
    if(opcoesSelecionadas.length > 0){
        opcoesSelecionadas.forEach((opcao) => {
            opcao.classList.remove("selecionada")
            opcao.classList.remove("destaque")
            caixa2.appendChild(opcao)
        })
        opcoesSelecionadas = []
    } else {
        alert('Nenhuma opção selecionada para copiar!')
    }
})