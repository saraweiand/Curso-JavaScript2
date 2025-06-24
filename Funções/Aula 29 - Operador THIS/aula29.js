function aluno(nome, nota){
    this.nome = nome // indica que o this.nome faz referência ao elemento da minha função aluno, que é o nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){  // setTimeout cria uma nova instância do this e sombreia o this de cima, por isso dá undefined
            //this.nome = "x" - assim ele consegue achar o nome
            //this.nota = 5 - assim ele consegue achar a nota
            console.log(this.nome)
            console.log(this.nota)
        }, 1000)
    }

        this.dados_arrow = function(){
        setTimeout(() => { // posso usar uma arrow function para conseguir os dados, pois ele não usa o contexto da execução atual, ele usa a do root
            console.log(this.nome)
            console.log(this.nota)
        }, 1000)
    }
}

const al1 = new aluno("Sara", 100)
al1.dados_anonimo()
al1.dados_arrow()