function exemploFor() {
    for (let contador = 1; contador <= 5; contador++) {
        alert(contador);
    }
}

function exemplodowhile() {
    let contador = 1;

    do {
        console.log(contador);
        contador++;
    } while (contador <= 5);
}

function basic01() {
    for (let contador = 1; contador <= 10; contador++) {
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


function exercicioint01(){
    let numero = (prompt("Digite o número"));
    
     for (let i = 2; i <= 50; i+=2) {
        console.log(i);
       
            
        }
    }
exercicioint01();