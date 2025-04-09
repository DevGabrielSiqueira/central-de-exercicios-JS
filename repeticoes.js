function exemplocontagem() {
    for (let contador = 1; contador <= 5; contador++) {
        alert(contador);
    }
}


function exemplotabuada(){
    let numero = (prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
}

function exemploN(){
    let n = (prompt("Digite um número N:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
  soma += i;
}

console.log(`A soma dos primeiros ${n} números naturais é: ${soma}`);
}


function exercicioint001(){
    let numero = (prompt("Digite o número"));
    
     for (let i = 2; i <= 50; i+=2) {
        console.log(i);
       
            
        }
    }

    function exercicioint002(){

    let num = (prompt("Digite um número:"));
while (num >= 0) {
  console.log(num);
  num--;
  }
}

  exercicioint002();