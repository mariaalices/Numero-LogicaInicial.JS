alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// Math.randam - gera um numero aleatorio entre 0 e 1
// * 10 - torna o numero inteiro
// parseInt pega a parte inteira do valor (somente a 1 casa antes dos decimais)

// console.log("numero Secreto " + numeroSecreto);
// o console.log exibe no inspecionar o numero aleatorio gerado
let chute;
let tentativas = 1;

// enquanto chute for diferente ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e " + numeroMaximo);

    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;   
    } else {
        if (chute < numeroSecreto) {
            alert("O número secreto é maior que " + chute);
        } else {
            alert("O número secreto é menor que " + chute);
        } 
        tentativas++; 
    }
} 

let palavraTentativa = tentativas > 1 ? " tentativas" : " tentativa";
alert("Isso ai! Você descobriu o número secreto: " + numeroSecreto + " com " + tentativas + palavraTentativa);

// if (tentativas > 1) {
//     alert("Isso ai! Você descobriu o número secreto: " + numeroSecreto + " com " + tentativas + " tentativas!");
// } else {
//     alert("Isso ai! Você descobriu o número secreto: " + numeroSecreto + " com " + tentativas + " tentativa!");
// }

