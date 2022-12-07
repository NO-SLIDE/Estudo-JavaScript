# Estudo-JavaScript

/* let nome = "Edilson"
 let idade = 90

 console.log(nome)
 console.log(idade)*/

let nome = "Edilson" //string
let idade = 90 //number
let logado = true //boolean
let lista = ["ovo", "massa", "corante"] //array
let nomeCompleto = {nome: "Edilson", idade: 90} //object

// o comando abaixo exibe os dados no Console
// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof logado)
// console.log(typeof lista)
// console.log(typeof nomeCompleto)

// 1. Crie uma variável para armazenar o nome
// do carro e ponha o valor Ferrari. E exiba-a.

// 2. Crie uma variável para armazenar o preço
// do bolo, que custa R$19,99. E exiba-a.

// 3. Corrija o código a seguir (e exiba-o).
// let "cidade" = São Paulo

// let preco = 19.99;
// let carro = "Ferrari";
// let cidade = "São Paulo";

// console.log(carro)
// console.log(preco)
// console.log(cidade)

// A10)
// Tipos de Variáveis:

// let nome = "Edilson"
// console.log(nome)
//         Ou
// var nome = "Edilson"
// console.log(nome)

// const nome = "Edilson"
// console.log(nome) <- Não altera

// ________________________________________________
// let nome = "Edilson"
// nome = "João"
// console.log(nome)
//         ou

// let nome = "Edilson"
// console.log(nome)

// nome = "João"
// console.log(nome)
// ________________________________________________
// A11)
// let x = 2;
// x = x + 8;
// console.log(x);

// let x = "2";
// x = x + 8;
// console.log(x);
// ________________________________________________
// let nome = "Edilson";
// let sobrenome = "Aparecido";
// let nomeCompleto = nome + ' ' + sobrenome;
// console.log(nomeCompleto);

// let moeda = "R";
// let simbolo = "$";
// let valor = 19.90

// let moedaSimbolo = moeda + simbolo + valor;
// console.log(moedaSimbolo);
// ________________________________________________
// let n1 = 15;
// let n2 = 20;
// let n3 = 10;
// let soma = n1 + n2 + n3;
// console.log(soma)

// let n1 = 15;
// let n2 = 20;
// let n3 = 10;
// let soma = (n1 * n2) + n3;
// console.log(soma)
// ________________________________________________
// A12)
// let nome = "Edilson";
// let sobrenome = "Aparecido";

// // let nomeCompleto = nome + ' ' + sobrenome;
// // let nomeCompleto = `Edilson Aparecido`

// let nomeCompleto = `${nome} ${sobrenome} Souza `

// // console.log(nomeCompleto);
// //         ou
// console.log("nome: " + nomeCompleto)

// let idade = 90;

// let idadeString = `${idade} anos`;

// console.log(idadeString)
// ________________________________________________
// A13) Condicionais:
// > - Maior
// < - Menor
// == - Igual
// === - Igual/Tipo
// >= - Maior e Igual
// <= - Menor e Igual
// != - diferente

// let idade = 10;

// if (idade > 17) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você não é menor de idade");
// }

// ______________________________________________________
// A14) Condicional == e ===
// let idade = 20;

// if (idade == 20) {
//     console.log("Você te 20 anos");
// }

// let idade = "20";
//         /* String + Number = Concatenação */
// if (idade == 20) {
//     idade = idade + 15;
//     console.log("Idade adicionada com sucesso!");
//     console.log(idade);
// }

// let idade = "20";
//         /* String + String = Concatenação */
// if (idade == "20") {
//     idade = idade + 15;
//     console.log("Idade adicionada com sucesso!");
//     console.log(idade);
// }

// let idade = 20;
//         /* Number + Number = Soma */
// if (idade === 20) {
//     idade = idade + 15;
//     console.log("Idade adicionada com sucesso!");
//     console.log(idade);
// }

// ______________________________________________________
// A15) Multi-Condicionais (&& e ||)
// && - o mesmo que "e"
// || - o mesmo que "ou"


// let idade = 14;

// if (idade >= 18) {
//     if (idade < 60) {
//     console.log("Você é um adulto");
//     }
// }
        // OU

// if (idade >= 18 && idade < 60) {
//     console.log("Você é um adulto");
// }

// if (idade > 18 || idade >= 5) {
//     console.log("Você é um adulto");
// }

// ______________________________________________________
// A16) Condicional Dupla (if else)

// let idade = 18;

// if (idade <= 18) {
//     console.log("Você é uma criança");
// } 

// if (idade >= 18 && idade < 60) {
//     console.log("Você é um adulto");
// } 

// if (idade >= 60) {
//     console.log("Você é um idoso");
// }

// if (idade <= 18) {
//     console.log("Você é uma criança");
// } else if (idade >= 18 && idade < 60) {
//     console.log("Você é um adulto");
// } else if (idade >= 60) {
//     console.log("Você é um idoso");
// } 

// ______________________________________________________
// A17) Desmistificando o IF

// let ok = false;

// if (ok) {
//     console.log("Entrou no if");
// } else {
//     console.log("Não entrou no if");
// }

// let idade = 14;

// let adulto = idade >= 18 && idade < 60;

// if (adulto) {
//     console.log("Entrou no if");
// } else {
//     console.log("Não entrou no if");
// }
//         OU

// console.log(idade > 18);

// ______________________________________________________
// A18) Exercícios de Condicionais

// Substitua o @ pela condicional correta para que o resultado seja TRUE
// let x = 10;
// let y = 5;
// console.log(x > y);

// Substitua o @ pela condicional correta para que o resultado seja FALSE 
// let w = "10";
// let z = 10;
// console.log(w === z);

// Substitua o @ pela condicional correta para que o resultado seja TRUE
// let a = 10;
// let b = 5;
// console.log(a != b);

// Crie uma condicional para verificar se o preço da 
// carne está barato ou caro. Obs: Até 45 está barato.

// let preco = 50.3;

// if (preco <= 45) {
//     console.log("O preço da carne está barata.");
// } else {
//     console.log("O preço da carne está cara.");
// }

// ______________________________________________________
// A19) Condicional Ternário

// let isMember = false;

// let shipping = isMember ? 2 : 10;

// console.log(isMember ? 'Você é membro' : 'Você não é membro');
// console.log("Frete: " + shipping);

// let age = 90;

// let isAdult = (age >= 18 ? 'Sim' : 'Não');

// console.log(isAdult);

// ______________________________________________________
// A20) Switch

// let profession = "pintor";

// console.log("Profissão: " + profession)

// switch(profession) {
//         case 'fiscal':
//                 console.log('Sua camisa será VERDE')
//                 break;
//         case 'bombeiro':
//                 console.log('Sua camisa será VERMELHA')
//                 break;
//         case 'policial':
//                 console.log('Sua camisa será AZUL')
//                 break;
//         default:
//                 console.log('Sua camisa será PRETA');
//                 break;
// }
// -------------------------------------------------------------------------------------------------------------
// MÓDULO 2: JAVASCRIPT BÁSICO

// A3) Declarando uma função

// function gravidade() {
//         console.log('A gravidade do planeta é:');
//         console.log(9.8);
// }

// console.log('Opa tudo bem?');

// gravidade();

// ______________________________________________________
// A4) Passando parâmetros em funções

// function somar(n1, n2) {
//         let resultado = n1 + n2;
//         console.log('Resultado: '+ resultado);
// }

// somar(10, 15);

// function nomeCompleto(nome, sobrenome) { 
//         console.log(`${nome} ${sobrenome}`);
// }

// nomeCompleto("Edilson", "Aparecido");
// nomeCompleto("João", "Apostulo")

// ______________________________________________________
// A5) Retorno de função

// ENTRADA -> PROCESSAMENTO -> SAÍDA

// function nomeCompleto(nome, sobrenome) { 
//         return `${nome} ${sobrenome}`;
// }

// let completo = nomeCompleto(" Edilson", "Aparecido");
// console.log('Nome:' + completo);

// ______________________________________________________
// A6) Função com retorno condicional

// function maiorDeIdade(idade) {
//         if(idade >= 18) {
//                 return true;
//         } else {
//                 return false;
//         }
//  }

// let verificacao = maiorDeIdade(18);
// console.log(verificacao);
                // ou

// let idade = 18;
// let verificacao = maiorDeIdade(idade);

// if(verificacao) {
//         console.log('É maior de idade');
// } else {
//         console.log('É menor de idade');
// }

// ______________________________________________________
// A7) Exercícios de funções #4

// Calcule a porcentagem entre 2 números
// Exemplo: 25% de 40 é 10
// Fórmula a porcentagem: (y / x) * 100
// Uso da função:

// function calcPct(n1, n2) {
//         let pct = (n2 / n1) * 100;
//         return pct;
// }

// let x = 40;
// let y = 10;
// let pct = calcPct(x, y);
// console.log(`${pct}% de ${x} é ${y}`);

// ______________________________________________________
// A8) Exercícios de funções #5

// Calcule o preço do imóvel
// - m2 = 3.000
// - Se tiver 1 quarto, o m2 é 1x
// - Se tiver 2 quartos, o m2 é 1.2x
// - Se tiver 3 quartos, o m2 é 1.5x
// Uso da função:

// function calcularImovel(metragem, quartos) {
//         let m2 = 3000;
//         let preco = 0;
//         switch (quartos) {
//                 case 1:
//                 default:
//                         preco = metragem * m2;
//                         break;
//                 case 2:
//                         preco = metragem * (m2 * 1.2);
//                         break;
//                 case 3:
//                         preco = metragem * (m2 * 1.5);
//                         break;
//         }

//         return preco;
// }


// let metragem = 123;
// let quartos = 3;
// let preco = calcularImovel(metragem, quartos);
// console.log(`A casa custa R$ ${preco}`);

// ##Exercícios de Funções:

// // Crie uma função que valide usuário e senha
// Usuário correto: admin
// Senha correta: 123

// Uso da função:
// function validar(usuario, senha) {
//         if(usuario === 'admin' && senha === '123') {
//                 return true;
//         } else {
//                 return false;
//         }
// }

// let usuario = "admin";
// let senha = '123';
// let validacao = validar(usuario, senha);
// if (validacao) {
//         console.log("Acesso concedido.");
// } else {
//         console.log("Acesso Negado!");
// }
// __________________________________________________
// ##Arrow Function

// function somar(x, y) {
//         return x + y;
// }
        // Ou
// const somar = (x, y) => {
//         return x + y;
// }
        // Ou
// const somar = (x, y) => x + y;

// console.log(somar(10, 5));
// __________________________________________________
// ##Variáveis dentro de funções:

// let count = 0; //Variável de escopo global

// function add() {
//         // let count = 0 //Variável de escopo local tem prioridade
//         count++;
// }

// add();
// add();

// console.log(count);
// __________________________________________________
// ##Funções dentro de Funções:

// function square(x) {
//         return x * x;
// }

// console.log(square(2));


// function square(x) {
//         return x * x;
// }

// function addSquares(a, b) {
//         let sqrA = square(a);
//         let sqrB = square(b);
//         return sqrA + sqrB;
// }

// console.log(addSquares(2, 3));
        // Ou

// function addSquares(a, b) {
//         const square = (x) => x * x;
        
//         let sqrA = square(a);
//         let sqrB = square(b);
//         return sqrA + sqrB;
// }
        
// console.log(addSquares(2, 3));
// __________________________________________________
// ##Introdução a Array:

// let colors = ['blue', 'red', 'green'];

// console.log(colors)
// console.log(colors[2])

// Resultado:
// (3) ['blue', 'red', 'green']
// 0: "blue"
// 1: "red"
// 2: "green"
// length: 3
// [[Prototype]]: Array(0)

//green]

// let lista = ['algo', 30, 'blabla', true];

// console.log(lista)

// Resultado:
// (4) ['algo', 30, 'blabla', true]
// 0: "algo"
// 1: 30
// 2: "blabla"
// 3: true
// length: 4
// [[Prototype]]: Array(0)
// exemplo:        0         __1__
//                          0     1
// let lista = ['blabla', ['xx', 30]];

// console.log(lista[1][0]);

// Resultado:
// xx
// __________________________________________________
// ##Operações básicas de Array:

// let ingredientes = [
//         'agua',
//         'farinha',
//         'ovo',
//         'corante',
//         'sal'
// ];

// console.log(ingredientes)
//         Ou

// let ingredientes = [
//         'agua',
//         'farinha',
//         'ovo',
//         'corante',
//         'sal'
// ];

// // ingredientes.push('cebola')

// // ingredientes.pop();

// // ingredientes.shift();

// console.log(ingredientes)

// console.log(`Total de ingredientes: ${ingredientes.length}`);

// __________________________________________________
// ##Exercícios de array:

// 1. No array abaixo, qual o número que pega a Ferrari?
// let carros = ['BMW', 'Ferrari', 'Mercedes'];
// // let x = 1
// console.log('1. ' + carros[1])

// // 2. Troque a Ferrari por Audi
// let carros = ['BMW', 'Ferrari', 'Mercedes'];
// carros[1] = 'Audi';
// console.log('2. Lista com Audi:');
// // console.log(carros)

// // 3. Adicione o Volvo a lista
// carros.push('Volvo');
// console.log('3. Lista com Volvo:');
// console.log(carros);

// // 4. Exiba quantos itens tem no array
// console.log('4. Itens no array:');
// console.log(carros.length);

// __________________________________________________
// ##O que são objetos?

// let nome = 'Edilson';
// let nomes = ['Edilson', 'Pedro'];
// let personagem = {
//     nome: 'Edilson',
//     idade: 90,
//     pais: 'Brasil'    
// }

// console.log(personagem.nome);
//         // Ou
// console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}`)

// let personagem = {
//     nome: 'Edilson',
//     idade: 90,
//     pais: 'Brasil',
//     olhos: ['verde', 'azul'],
//     caracteristicas: {
//         forca: 50,
//         stamina: 15,
//         magia: 5
//     }   
// }

// console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}`);
// console.log(personagem.olhos[1]);
// console.log(`Força: ${personagem.caracteristicas.forca}`);
// console.log(`Stamina: ${personagem.caracteristicas.stamina}`);
// console.log(`Magia: ${personagem.caracteristicas.magia}`);
// __________________________________________________
// ##Acessando e alterando objetos

// let personagem = {
//     nome: 'Edilson',
//     idade: 90,
//     pais: 'Brasil',
//     olhos: ['preto', 'azul'],
//     caracteristicas: {
//         forca: 20,
//         stamina: 15,
//         magia: 5
//     }   
// }

// personagem.nome = 'Pedro';


// console.log(personagem.nome)
// personagem.caracteristicas.forca+= 5;
// console.log(`Força: ${personagem.caracteristicas.forca}`);
// personagem.olhos.push('verde');

// console.log(personagem.olhos);

// let personagem = {
//         nome: 'Edilson',
//         idade: 90,
//         carros: [
//                 {modelo: 'Fiat', cor: 'preto'},
//                 {modelo: 'Ferrari', cor: 'vermelho'}
//         ]
// }

// console.log(personagem.carros[0].modelo);
// __________________________________________________
// ##Função dentro de objeto

// let pessoa = {
//         nome: 'Edilson',
//         sobrenome: 'Aparecido',
//         idade: 90,
//         nomeCompleto: function() {
//                return `${this.nome} ${this.sobrenome}`;
//         }
// }

// console.log(pessoa.nomeCompleto());
// __________________________________________________
// ##O loop for

// for (let n = 0; n < 10; n++) {
//         console.log("Frase Qualquer " + n);
// }
// __________________________________________________
// ##Dando loop em arrays

// let cores = ['preto', 'branco', 'azul', 'vermelho'];
// cores.push('verde');

// for (let n = 0; n < cores.length; n++) {
//         console.log(cores[n]);
// }

// let cores = [
//         { nome: 'preto', qt: 10 },
//         { nome: 'azul', qt: 5 },
//         { nome: 'vermelho', qt: 15 }
                                                                                                                        
// ];

// for (let i in cores) {
//         cores[i].nome = cores[i].nome.toUpperCase();
// }

// console.log(cores);

// for (let cor of cores) {
//         console.log(cores.nome);
// }

// for (let cor of cores) {
//         console.log(`Nome: ${cor.nome} - ${cor.qt}`);
// }
// __________________________________________________
// ##O loop while

// let numero = 0;

// while (numero < 10) {
//         console.log(`O numero da vez é ${numero}`);
//         numero++;
// }

// for (let numero = 0; numero <= 10; numero++) {
//         console.log(`O numero da vez é ${numero}`);
// }
// __________________________________________________
// ##Exercícios de loops
// 1. Faça um loop que mostre todas as frutas
// let fruits = ['Maça', 'Uva', 'Banana'];
// for (let x in fruits) {
//         console.log(fruits[x]);
// }

// 2. Conte de 1 até 100 através de um While
// let n = 1;
// while(n <= 100) {
//         console.log(n);
//         n++;
// }
