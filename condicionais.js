
function exercicioCondicionais01() {

    let idade = prompt("Digite sua idade")

    if (idade >= 18) {

        alert("Maior de idade")

    } else {

        alert("Menor de idade")
    }
}

gerarLog("Exercício de notas executado às " + new Date().toLocaleString());

function exercicioCondicionais02() {

    let numero = prompt("Digite o número")
    if (numero >= 0) {
        alert("Positivo")

    } else {
        alert("Negativo")
    }
}

gerarLog("Exercício de positivo e negativo executado às " + new Date().toLocaleString());

function exercicioCondicionais03() {
    let nota = prompt("Digite sua nota")

    if (nota >= 60) {

        alert("Aprovado")
    } else {

        alert("Reprovado")
    }
}

gerarLog("Exercício de aprovação executado às " + new Date().toLocaleString());



function exercicioCondicionais04() {

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

gerarLog("Exercício de posito, negativo e zero executado às " + new Date().toLocaleString());

function exercicioCondicionais05() {


    let idade = prompt("Digite sua idade")

    if (idade >= 0 && idade <= 12) {

        alert("Crianca")

    } else if (idade >= 13 && idade <= 17) {

        alert("Adolescente")

    } else {

        alert("Adulto")
    }
}

gerarLog("Exercício de maturidade executado às " + new Date().toLocaleString());


function exercicioCondicionais06() {

    let numero = prompt("Digite um número para verificar se é par ou ímpar: ")

    if (numero % 2 == 0) {

        alert("O número é par")
    } else {
        alert("o número é ímpar")
    }
}

gerarLog("Exercício de ímpar ou par executado às " + new Date().toLocaleString());


function exercicioInt01() {

    let numero = Number(prompt("Digite o primeiro numero"))
    let numero02 = Number(prompt("Digite o segundo numero"))
    let operacao = prompt("Digite o operador")

    if (operacao === "+") {
        alert(numero + numero02)
    } else if (operacao === "-") {
        alert(numero - numero)
    } else if (operacao === "*") {
        alert(numero * numero02)
    } else if (operacao === "/") {
        alert(numero / numero02)
    }
}

gerarLog("Exercício de operação executado às " + new Date().toLocaleString());

function exercicio02int(){

    let valor = prompt ("Qual o valor da compra?")
    let desconto = (10)

    if (valor >=10){

        alert ( valor - desconto)

    } else {

        alert (valor)
    }
}

gerarLog("Exercício de desconto executado às " + new Date().toLocaleString());

function gerarLog (textoDoLog) {

    let logsContainer = document.querySelector(".logs-container");

    let paragraph = document.createElement ("p");

    paragraph.innerHTML = textoDoLog;

    logsContainer.appendChild(paragraph);


}