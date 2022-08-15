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


function add() {

    nomeProd = document.querySelector("#nomeProd").value;   
    categoria = document.querySelector("#categoria").value;

    
    switch (categoria) {

        case "cereais":

            cereais.push(nomeProd);

            renderCereais();

            break;

        case "leguminosas":

            leguminosas.push(nomeProd);
            renderLeguminosas();

            break;

        case "frutas":

            frutas.push(nomeProd);
            renderFrutas();

            break;

        case "laticinios":

            laticinios.push(nomeProd);
            renderLaticinios();

            break;

        case "carnes":

            carnes.push(nomeProd);
            renderCarnes();

            break;

        default:

            alert(`Categoria inválida! O produto ${nomeProd} não foi adicionado à lista.`);

            break;

    }


    mostrarLista();


}


// EXIBE OU NÃO A CATEGORIA DOS PRODUTOS CONFORME PRESENÇA OU NÃO DOS MESMOS (LISTA VAZIA - CATEGORIA OCULTA)

function mostrarLista() {

    let categoriaCereais = document.querySelector(".categoria-cereais");
    let categoriaLeguminosas = document.querySelector(".categoria-leguminosas");
    let categoriaFrutas = document.querySelector(".categoria-frutas");
    let categoriaLaticinios = document.querySelector(".categoria-laticinios");
    let categoriaCarnes = document.querySelector(".categoria-carnes");

    if (cereais.length > 0) {

        categoriaCereais.classList.add("displayBlock");

    } else {

        categoriaCereais.classList.remove("displayBlock");

    }


    if (leguminosas.length > 0) {

        categoriaLeguminosas.classList.add("displayBlock");

    } else {

        categoriaLeguminosas.classList.remove("displayBlock");

    }



    if (frutas.length > 0) {

        categoriaFrutas.classList.add("displayBlock");

    } else {

        categoriaFrutas.classList.remove("displayBlock");

    }



    if (laticinios.length > 0) {

        categoriaLaticinios.classList.add("displayBlock");

    } else {

        categoriaLaticinios.classList.remove("displayBlock");

    }



    if (carnes.length > 0) {

        categoriaCarnes.classList.add("displayBlock");

    } else {

        categoriaCarnes.classList.remove("displayBlock");

    }



}




// MOSTRA AS INSERÇÕES/ALTERAÇÕES DOS PRODUTOS NA TELA
function renderCereais() {
    let ul = document.querySelector("#cereais");
    ul.innerHTML = null;

    cereais.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderLeguminosas() {
    let ul = document.querySelector("#leguminosas");
    ul.innerHTML = null;

    leguminosas.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderFrutas() {
    let ul = document.querySelector("#frutas");
    ul.innerHTML = null;

    frutas.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderLaticinios() {
    let ul = document.querySelector("#laticinios");
    ul.innerHTML = null;

    laticinios.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};

function renderCarnes() {
    let ul = document.querySelector("#carnes");
    ul.innerHTML = null;

    carnes.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};



// CONTINUAR

function remove() {

  
    
    if (cereais.length === 0 && leguminosas.length === 0 && frutas.length === 0 && laticinios.length === 0 && carnes.length === 0) {

        alert(`A lista está vazia!`);

    } else {


       nomeProd = document.querySelector("#nomeProd").value;  
       categoria = document.querySelector("#categoria").value;

        if (categoria == "cereais" && cereais.indexOf(nomeProd) != -1) {

            cereais.splice(cereais.indexOf(nomeProd), 1);

            mostrarLista();
            renderCereais();


        } else if (categoria == "leguminosas" && leguminosas.indexOf(nomeProd) != -1) {

            leguminosas.splice(leguminosas.indexOf(nomeProd), 1);

            mostrarLista();
            renderLeguminosas();


        } else if (categoria == "frutas" && frutas.indexOf(nomeProd) != -1) {

            frutas.splice(frutas.indexOf(nomeProd), 1);

            mostrarLista();
            renderFrutas();


        } else if (categoria == "laticinios" && laticinios.indexOf(nomeProd) != -1) {

            laticinios.splice(laticinios.indexOf(nomeProd), 1);

            mostrarLista();
            renderLaticinios();



        } else if (categoria == "carnes" && carnes.indexOf(nomeProd) != -1) {

            carnes.splice(carnes.indexOf(nomeProd), 1);

            mostrarLista();
            renderCarnes();


        } else {

            alert(`Não foi possível encontrar o item dentro da lista!\n\nVerifique se o nome do produto e categoria foram selecionados corretamente!`);

        }

    }
    




}






/*

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


^^^^ ACIMA PARTE EXCLUIR ^^^^

*/

