/*

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

*/

let numeroSorteado = Math.floor(Math.random() * 10);

console.log(numeroSorteado);

let palpite = prompt("Qual é o seu palpite de número (digite um número entre 0 e 10)?");

if (palpite == numeroSorteado) {


    document.getElementById("numero").innerHTML = `O <strong> número sorteado foi ${numeroSorteado} </strong>!`;

    document.getElementById("palpite").innerHTML = `Parabéns!! Você acertou. 🎉🎉`;

    document.querySelector("body").style.backgroundColor = "#005C4B";


} else {

    for (let i = 1; i < 3; i++) {

        alert(`Infelizmente você errou e tem mais ${3 - i} tentativa(s).`);

        palpite = prompt(`${i}ª Tentativa: Escolha mais um número (entre 0 e 10)?`);

        if (palpite == numeroSorteado) {

            document.getElementById("numero").innerHTML = `O <strong> número sorteado foi ${numeroSorteado} </strong>!`;

            document.getElementById("palpite").innerHTML = `Parabéns!! Você acertou. 🎉🎉`;

            document.querySelector("body").style.backgroundColor = "#005C4B";


            break;

        } else {

            document.getElementById("numero").innerHTML = `O <strong> número sorteado foi ${numeroSorteado} </strong>!`;

            document.getElementById("palpite").innerHTML = `Infelizmente não foi dessa vez. 😥`;

            document.querySelector("body").style.backgroundColor = "#ff0000";


        }

    }


};
