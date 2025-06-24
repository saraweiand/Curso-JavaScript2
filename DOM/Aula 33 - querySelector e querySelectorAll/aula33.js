const divTodos = [...document.getElementsByTagName("div")]
const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")

const query_divTodos = document.querySelector("div")
const query_divTodos2 = [...document.querySelectorAll("div")]
const query_divTodos3 = [...document.querySelectorAll(".curso")]

console.log(query_divTodos)
console.log(query_divTodos2)
console.log(query_divTodos3)

// console.log(divTodos)
// console.log(cursoTodos)
// console.log(cursoC1)
// console.log(cursoC2)
// console.log(cursoEspecial)