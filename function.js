// let pessoas = [
//     {
//     nome: "Edilson",
//     idade: 40,
//     sexo: "masculino",
//     },
//     {
//     nome: "Leda",
//     idade: 68,
//     Sexo: "feminino"
//     },
//     {
//     nome: "Antenor",
//     idade: 67,
//     sexo: "masculino",
//     },
//     {
//     nome: "Gregório",
//     idade: 38,
//     sexo: "masculino",
//     },
//     {
//     nome: "Tancredo",
//     idade: 36,
//     sexo: "masculino",
//     },
//     {
//     nome: "Maycon",
//     idade: 18,
//     sexo: "masculino",
//     },
//     {
//     nome: "Eron",
//     idade: 15,
//     sexo: "masculino",
//     },
//     {
//     nome: "Rayane",
//     idade: 12,
//     sexo: "feminino",
//     },
//     {
//     nome: "Laura",
//     idade: 2,
//     sexo: "feminino",
//     },
//     {
//     nome: "Adriana",
//     idade: 40,
//     sexo: "feminino",
//     },
//     {
//     nome: "Dejanira",
//     idade: 80,
//     sexo: "feminino",
//     },
//     {
//     nome: "João",
//     idade: 80,
//     sexo: "masculino",
//     },
//     {
//     nome: "Sebastiana",
//     idade: 80,
//     sexo: "feminino",
//     },
//     {
//     nome: "José",
//     idade: 80,
//     sexo: "masculino",
//     },
//     {
//     nome: "Gabriel",
//     idade: 9,
//     sexo: "masculino",
//     },
//     {
//     nome: "Felipe",
//     idade: 5,
//     sexo: "masculino",
//     },
//     {
//     nome: "Maya",
//     idade: 2,
//     sexo: "feminino",
//     },
//     {
//     nome: "Victor",
//     idade: 17,
//     sexo: "masculino",
//     },
//     {
//     nome: "Raul",
//     idade: 9,
//     sexo: "masculino",
//     },
// ];

// pessoas[2].pais = [pessoas[0], pessoas[3], pessoas[4]];
// pessoas[1].pais = [pessoas[0], pessoas[3], pessoas[4]];
// pessoas[0].irmaos = [pessoas[3], pessoas[4]];
// pessoas[5].filhos = [pessoas[0]];
// pessoas[6].filhos = [pessoas[0]];
// pessoas[7].filhos = [pessoas[0]];
// pessoas[8].filhos = [pessoas[0]];
// pessoas[9].conjugue = [pessoas[0]];
// pessoas[10].avos_maternos = [pessoas[0], pessoas[3], pessoas[4]];
// pessoas[11].avos_maternos = [pessoas[0], pessoas[3], pessoas[4]];
// pessoas[12].avos_paternos = [pessoas[0], pessoas[3], pessoas[4]];
// pessoas[13].avos_paternos = [pessoas[0], pessoas[3], pessoas[4]];
// pessoas[14].sobrinhos = [pessoas[0]];
// pessoas[15].sobrinhos = [pessoas[0]];
// pessoas[16].sobrinhos = [pessoas[0]];
// pessoas[17].sobrinhos = [pessoas[0]];
// pessoas[18].sobrinhos = [pessoas[0]];

// let arvoreEdilson = {
//     ...pessoas[0],
//     pais: [pessoas[1], pessoas[2]],
//     irmaos: [pessoas[3], pessoas[4]],
//     filhos: [pessoas[5], pessoas[6], pessoas[7], pessoas[8]],
//     conjugue: [pessoas[9]],
//     avos_maternos: [pessoas[10], pessoas[11]],
//     avos_paternos: [pessoas[12], pessoas[13]],
//     sobrinhos: [pessoas[14], pessoas[15], pessoas[16], pessoas[17], pessoas[18]],
// };

//   console.log(arvoreEdilson);
// --------------------------------------------------------------
//##2: Declarando uma função
//function gravidade () {
//     console.log('A gravidade do planeta é: ');
//     console.log(9.8);
// }

// gravidade();

// __________________________________________________
//##3: Como usar uma função
// function nomeCompleto (nome, sobrenome) {
//     console.log(`${nome} ${sobrenome}`);
// };

// nomeCompleto("Edilson", "Aparecido");
// nomeCompleto("João", "Apostulo");

// function cpf (n1, n2, n3, n4) {
//     console.log(`CPF: ${n1}.${n2}.${n3}-${n4}`);
// };

// cpf(308, 699, 808, 31);

// __________________________________________________
//##4: Passando parâmetros em funções
// function somar (n1, n2) {
//     let adicao = n1 + n2;
//     let subtracao = n1 - n2;
//     let multiplicacao = n1 * n2;
//     let divisao = n1 / n2;
//     console.log('Resultado: ' + adicao);
//     console.log('Resultado: ' + subtracao);
//     console.log('Resultado: ' + multiplicacao);
//     console.log('Resultado: ' + divisao);
// };

// somar(10, 2);

// __________________________________________________
//##5: Retorno da função
// function nomeCompleto (nome, sobrenome) {
//     return `${nome} ${sobrenome}`;
// };

// let completo = nomeCompleto("Edilson", "Aparecido");
// console.log("Nome Completo: " + completo);
            // Ou
// console.log(nomeCompleto("Edilson", "Aparecido"));


//ENTRADA -> PROCESSAMENTO -> SAÍDA

// __________________________________________________
// ##6: Função com retorno condicional
// function maiorDeIdade (idade) {
//     if(idade >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let verificacao = maiorDeIdade(20);
// console.log(verificacao);

// function maiorDeIdade (idade) {
//     if(idade >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let idade = 65;
// let verificacao = maiorDeIdade(idade);
 
// if(verificacao) {
//     console.log("É maior de idade.");
// } else {
//     console.log("É menor de idade.");
// }

// __________________________________________________
// ##7: Exercícios de funções #4
//Calcule a porcentagem entre 2 números.
//Exemplo: 25% de 40 é 10
//Fórmula da porcentagem: (y / x) *100
//Uso da função:

// function calcPct(n1, n2) {
//     return (n2 / n1) * 100;
// }

// let x = 40;
// let y = 10;
// let pct = calcPct(x, y);
// console.log(`${pct}% de ${x} é ${y}`);

// __________________________________________________
// ##8: Exercícios de funções #5
// Calcule o preço do imóvel
// m2 = 3000
// se tiver 1 quarto, o m2 é 1x
// se tiver 2 quartos, o m2 é 1.2x
// se tiver 3 quartos, o m2 é 1.5x
// Uso da função:

// function calcularImovel(metragem, quartos) {
//     let m2 = 3000;
//     let preco = 0;
    
//     switch(quartos) {
//         case 1:
//         default:
//             preco = metragem * m2;
//             break;
//         case 2:
//             preco = metragem * (m2 * 1.2);
//             break;
//         case 3:
//             preco = metragem * (m2 * 1.5);
//             break;
//     }

//     return preco;
// }

// let metragem = 123;
// let quartos = 3;
// let preco = calcularImovel(metragem, quartos);
// console.log(`A casa custa R$ ${preco}`);


// __________________________________________________
// ##9: Exercícios de funções #6
//Crie uma função que valide usuário e senha.
//usuário correto: pedro
//Senha correta: 123

// function validar(usuario, senha) {
//     if(usuario === 'edilson' && senha === '123') {
//         return true;
//     } else {
//         return false;
//     }
// }

// let usuario = 'edilson';
// let senha = '1234';
// let validacao = validar(usuario, senha);
// if (validacao) {
//     console.log('Acesso Concedido.');
// } else {
//     console.log('Acesso Negado');
// }

// __________________________________________________
// ##10: Arrow Function
// function somar(x, y) {
//     return x + y;
// }

// console.log(somar(10, 5));

        //Ou

// const somar = (x, y) => {
//         return x + y;
// }
    
// console.log(somar(10, 5));

        //Ou

// const somar = (x, y) => x + y;

        
// console.log(somar(10, 5));

// __________________________________________________
// ##11: Variáveis dentro de funções
// function add() {
//     let count = 0;
//     count++
// }

// add();
// add();

// console.log(count);

// let count = 0;

// function add() {
//     count++
// }

// add();
// add();

// console.log(count);

// let count = 0;

// function add() {
//     let count = 0;
//     count += 10; //Obs: A preferência é pra variável de escopo local
// }

// add();
// add();

// console.log(count);

// __________________________________________________
// ##12: Funções dentro de funções
// function square(x) {
//     return x * x;
// }

// function addSquares(a, b) {
//     let sqrA = square(a);
//     let sqrB = square(b);
//     return sqrA + sqrB;
// }

// console.log(addSquares(4, 4));

        //Ou

// function addSquares(a, b) {
//     function square(x) {
//         return x * x;
//     }

//     let sqrA = square(a);
//     let sqrB = square(b);
//     return sqrA + sqrB;
// }
 
// console.log(addSquares(4, 4));

        //Ou

// function addSquares(a, b) {
//     const square = (x) => x * x;
    
//     let sqrA = square(a);
//     let sqrB = square(b);
//     return sqrA + sqrB;
// }
 
// console.log(addSquares(4, 4));