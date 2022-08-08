/*
Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.

DESAFIO: Desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
No final, o sistema vai exibir a mensagem:
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

EXERCÍCIO OPCIONAL

Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.
Mas ele é 100% opcional.
Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?

*/


const nome = prompt("Por favor, digite seu nome: ");
const idade = prompt("Qual a sua idade: ");
const linguagem = prompt("Qual linguagem de programação você está estudando?");


// EXIBINDO AS RESPOSTAS
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`);

document.getElementById("usuario").innerHTML = `Olá <strong> ${nome} </strong>, você tem <strong> ${idade} anos </strong> e <strong> já está aprendendo ${linguagem}! </strong>`;


let estudo = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);



while (estudo != 1 && estudo != 2) {
    alert("Opção inválida!");
    estudo = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
}

if (estudo == 1) {
    document.getElementById("estudo").innerHTML = "😄 Muito bom! Continue estudando e você terá muito sucesso.";
    document.querySelector("body").style.backgroundColor = "#005C4B";

} else if (estudo == 2) {
    document.getElementById("estudo").innerHTML = "🙁 Ahh que pena... Já tentou aprender outras linguagens?";
    document.querySelector("body").style.backgroundColor = "#ff0000";

}