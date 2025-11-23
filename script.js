// let -> Variável normal
// const -> Constante (Não pode mudar)
// "user strict" -> Habilida o modo estrito (Não deixa ocorrer confusões)

// x++ -> Adicona 1 ao valor de x
// x-- -> Subtrai 1 ao valor de x

// Tipos primitivos

/*
number -> Qualquer número
string -> Texto
null -> Valor nulo proposital
undefined -> A variavel existe mas mas n tem valor
boolean -> Verdadeiro ou falso
symbol()
*/

let contador = 0

const button = document.getElementById("button")
const spanContador = document.getElementById("contador")

button.addEventListener("click", function(){
    contador++
    spanContador.textContent = contador
})
