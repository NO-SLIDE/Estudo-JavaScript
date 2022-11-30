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
