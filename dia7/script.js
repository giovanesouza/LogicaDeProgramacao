

function digito(num) {

    document.getElementById("resultado").value += num;

}

function calcular() {

    let x = document.getElementById("resultado").value;
    let y = eval(x);
    document.getElementById("resultado").value = y;

    // Função EVAL() realiza uma operação aritmética com base em uma String. Caso não seja uma String, retorna o valor inalterado.
}

function limpar() {
    document.getElementById("resultado").value = "";
}




// OUTRA POSSIBILIDADE - utilizando o prompt

let calc = "sim";


while (calc === "sim") {

    let operacao = Number(prompt("Qual operação deseja realizar? \n\nAdição: digite => 1.\nSubtração: digite => 2.\nMultiplicação: digite => 3.\nDivisão: digite => 4."));

    switch (operacao) {
        case 1:
            adicao();
            break;

        case 2:
            subtracao();
            break;

        case 3:
            multiplicacao();
            break;

        case 4:
            divisao();
            break;

        default:
            alert("Operação inválida! Tente novamente.")
            break;

    }

    calc = prompt("Deseja realizar outro calculo? \nResponda:\n => sim\n => não");


    while (calc !== "sim") {

        if (calc === "sim") {
            continue;
        } else if (calc === "não") {
            break;
        }

        calc = prompt("Deseja realizar outro calculo? \nResponda:\n => sim\n => não");
    }

}



// OPERAÇÕES MATEMÁTICAS

function adicao() {
    alert("Operação selecionada: Adição.");
    n1 = Number(prompt("Informe UM número/valor: "));
    n2 = Number(prompt("Informe OUTRO número/valor: "));
    alert(`Resultado da adição ( ${n1} + ${n2} ) = ${n1 + n2}.`);
}


function subtracao() {
    alert("Operação selecionada: Subtração.");
    n1 = Number(prompt("Informe UM número/valor: "));
    n2 = Number(prompt("Informe OUTRO número/valor: "));
    alert(`Resultado da subtração ( ${n1} - ${n2} ) = ${n1 - n2}.`);

}


function multiplicacao() {
    alert("Operação selecionada: Multiplicação.");
    n1 = Number(prompt("Informe UM número/valor: "));
    n2 = Number(prompt("Informe OUTRO número/valor: "))
    alert(`Resultado da multiplicação ( ${n1} x ${n2} ) = ${n1 * n2}.`);
}

function divisao() {
    alert("Operação selecionada: Divisão");
    n1 = Number(prompt("Informe UM número/valor: "));
    n2 = Number(prompt("Informe OUTRO número/valor: "))
    alert(`Resultado da divisão ( ${n1} ÷ ${n2} ) = ${n1 / n2}.`);
}


/*
subtracao = (n1, n2) => n1 - n2;

multiplicacao = (n1, n2) => n1 * n2;

divisao = (n1, n2) => n1 / n2;


console.log(adicao());
console.log(subtracao(5, 5));
console.log(multiplicacao(5, 5));
console.log(divisao(5, 5));
*/
