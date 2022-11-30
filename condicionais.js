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


// let idade = 21;

// if ((idade >= 18 || idade < 22) && idade == 21) {
//     if (idade < 60) {
//     console.log("Você é um adulto");
//     }
// }
//         OU

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

// let userOn = true

// if(userOn) {
//     console.log('Bem vindo!')
// } else {
//     console.log('Faça o login')
// }

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