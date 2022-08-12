/*

---DIA 5:
Você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:
Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho


--- DIA 6:

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”


    */



// CATEGORIAS

let cereais = [];
let leguminosas = [];
let frutas = [];
let laticinios = [];
let carnes = [];


let nomeProd = "";
let categoria = "";


// PADRÃO PARA ENTRAR NO LOOP
let perguntaInserir = "sim";




do {

    perguntaInserir = prompt("Você deseja INSERIR algum produto a lista de compras? \n \n Responda: \n => sim: Para adicionar. \n => não: Para finalizar. \n => remover: Para excluir algum item. \n");

    while (perguntaInserir != "sim" && perguntaInserir != "não" && perguntaInserir != "remover") {
        alert("Opção inválida!");
        perguntaInserir = prompt("Você deseja inserir algum produto a lista de compras? \n \n Responda: \n => sim: Para adicionar. \n => não: Para finalizar. \n => remover: Para excluir algum item. \n");
    }


    if (perguntaInserir == "sim") {

        nomeProd = prompt("Informe o nome do produto: ");
        categoria = prompt(`Em qual categoria deseja inserir o produto (${nomeProd}): cereais, leguminosas, frutas, laticinios ou carnes`);

        switch (categoria) {

            case "cereais":

                cereais.push(nomeProd);
                alert(`O produto ${nomeProd} foi adicionado à categoria ${categoria}!`);
                break;

            case "leguminosas":

                leguminosas.push(nomeProd);
                alert(`O produto ${nomeProd} foi adicionado à categoria ${categoria}!`);
                break;

            case "frutas":

                frutas.push(nomeProd);
                alert(`O produto ${nomeProd} foi adicionado à categoria ${categoria}!`);
                break;

            case "laticinios":

                laticinios.push(nomeProd);
                alert(`O produto ${nomeProd} foi adicionado à categoria ${categoria}!`);
                break;

            case "carnes":

                carnes.push(nomeProd);
                alert(`O produto ${nomeProd} foi adicionado à categoria ${categoria}!`);
                break;

            default:

                alert(`Categoria inválida! O produto ${nomeProd} não foi adicionado à lista.`);

                break;

        }


    } else if (perguntaInserir == "remover") {

        if (cereais.length === 0 && leguminosas.length === 0 && frutas.length === 0 && laticinios.length === 0 && carnes.length === 0) {

            alert(`A lista está vazia!`);

        } else {  

            remover = prompt(`Lista de compras:\n  Cereais: ${cereais}\n  Leguminosas: ${leguminosas}\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n Carnes: ${carnes}\n\n Qual produto você deseja remover?`);

            if (cereais.indexOf(remover) != -1) {

                cereais.splice(cereais.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);


            } else if (leguminosas.indexOf(remover) != -1) {

                leguminosas.splice(leguminosas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);


            } else if (frutas.indexOf(remover) != -1) {

                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);

            } else if (laticinios.indexOf(remover) != -1) {

                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)

            } else if (carnes.indexOf(remover) != -1) {

                carnes.splice(carnes.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)


            } else {

                alert(`Não foi possível encontrar o item dentro da lista!`);

            }

        } 
    }


    if (perguntaInserir == "não") {

        break; // Sai do Loop

    }




} while (perguntaInserir == "sim");


alert(`Lista de compras:\n  Cereais: ${cereais}\n  Leguminosas: ${leguminosas}\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Carnes: ${carnes}`)


