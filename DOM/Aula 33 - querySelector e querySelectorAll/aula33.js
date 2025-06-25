const divTodos = [...document.getElementsByTagName("div")]
const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")

//const query_divTodos = document.querySelectorAll("div[class]")
const query_divTodos = document.querySelectorAll("div > p")
const query_cursoTodos = [...document.querySelectorAll(".curso")]
const query_cursoC1 = [...document.querySelectorAll(".c1")]
const query_cursoC2 = [...document.querySelectorAll(".c2")]
const query_cursoEspecial = document.querySelectorAll("#c1")[0]

console.log(query_divTodos)
// console.log(query_cursoTodos)
// console.log(query_cursoC1)
// console.log(query_cursoC2)

// console.log(divTodos)
// console.log(cursoTodos)
// console.log(cursoC1)
// console.log(cursoC2)
// console.log(cursoEspecial)