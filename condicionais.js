
function exercicio01() {

    let idade = prompt("Digite sua idade")

    if (idade >= 18) {

        alert("Maior de idade")

    } else {

        alert("Menor de idade")
    }
}

function exercicio02() {

    let numero = prompt("Digite o número")
    if (numero >= 0) {
        alert("Positivo")

    } else {
        alert("Negativo")
    }
}

function exercicio03() {
    let nota = prompt("Digite sua nota")

    if (nota >= 60) {

        alert("Aprovado")
    } else {

        alert("Reprovado")
    }
}

function exercicio04() {

    let numero = prompt("Digite um numero:");

    if (numero > 0) {

        alert("Positivo.");
    } else {

        if (numero < 0) {

            alert("Negativo.");
        } else {

            alert("É zero.")
        }
    }
}

function exercicio05() {


    let idade = prompt("Digite sua idade")

    if (idade >= 0 && idade <= 12) {

        alert("Crianca")

    } else if (idade >= 13 && idade <= 17) {

        alert("Adolescente")

    } else {

        alert("Adulto")
    }
}


function exercicio06() {

    let numero = prompt("Digite um número para verificar se é par ou ímpar: ")

    if (numero % 2 == 0) {

        alert("O número é par")
    } else {
        alert("o número é ímpar")
    }
}

debugger
function exercicio01int() {

    let numero = Number(prompt("Digite o primeiro numero"))
    let numero02 = Number(prompt("Digite o segundo numero"))
    let operacao = prompt("Digite o operador")

    if (operacao === "+") {
        alert(numero + numero02)
    } else if (operacao === "-") {
        alert(numero - numero02)
    } else if (operacao === "*") {
        alert(numero * numero02)
    } else if (operacao === "/") {
        alert(numero / numero02)
    }
}

exercicio02int