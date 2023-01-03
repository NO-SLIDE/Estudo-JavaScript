// Exercícios de Array e Objeto:

// CONTEXTO 1
let comidas = ['HamburguerA', 'HamburguerB', 'HamburguerC', 'HamburguerD', 'HamburguerE'];

console.log('Contexto 1: ' + comidas[2]);

// CONTEXTO 2
let hamburguers = [
        {               
        nome: 'Xtudo',
        ingredientes: ['ovo', 'hamburguer'],
        valor: 20,
        },
        {
        nome: 'Xsalada',
        ingredientes: ['alface', 'tomate'],
        valor: 10,
        },
        {
        nome: 'Xbacon',
        ingredientes: ['bacon', 'queijo'],
        valor: 15,
        },
        {
        nome: 'Xcalabresa',
        ingredientes: ['calabresa', 'catchup'],
        valor: 12,
        },
        {
        nome: 'Xfrango',
        ingredientes: ['frango', 'mostarda'],
        valor: 18,
        }
]

console.log(`Contexto 2: ${hamburguers[4].ingredientes[0]}`);


// CONTEXTO 3

// let nomeComida = hamburguers[0].nome;
// let valorComida = hamburguers[0].valor;

// let texto = `O ${nomeComida} custa ${valorComida} reais`
// console.log('Contexto 3: ' + texto)

let comida = hamburguers[3];
let texto = `O ${comida.nome} custa ${comida.valor} reais`
console.log('Contexto 3: ' + texto)

// CONTEXTO 5
let carros = [
        {
        nome: 'Ferrari',
        velocidade: 200,
        },
        {
        pintura: [
                'azul', 'amarelo', 'verde'
        ]
        }
]

let novoCarro = carros[0];
let corCarro = carros[1].pintura[0];
texto = `A ${novoCarro.nome} corre a ${novoCarro.velocidade}km por hora`;
console.log(texto)

texto = `A ${novoCarro.nome} é da cor ${corCarro}`;
console.log(texto)

// CONTEXTO 4
//1ª forma de solução
let valorComida = hamburguers[0].valor + hamburguers[1].valor + hamburguers[2].valor;

console.log('Contexto 4/1: ' + valorComida)

//2ª forma de solução
let valorComida1 = hamburguers[0].valor;
let valorComida2 = hamburguers[1].valor;
let valorComida3 = hamburguers[2].valor;

let soma = valorComida1 + valorComida2 + valorComida3;
console.log(`Contexto 4/2: ${soma}`)

//3ª forma de solução
let nomeHamburguers1 = hamburguers[0].nome;
let nomeHamburguers2 = hamburguers[1].nome;
let nomeHamburguers3 = hamburguers[2].nome;
valorComida = hamburguers[0].valor + hamburguers[1].valor + hamburguers[2].valor;

texto = `A compra do ${nomeHamburguers1}, ${nomeHamburguers2}, ${nomeHamburguers3} tem o valor total de ${valorComida} reais`
console.log(`Contexto 4/3: ${texto}`)

//4ª forma de solução
let hamburguer1 = hamburguers[3];
let hamburguer2 = hamburguers[1];
let hamburguer3 = hamburguers[2];
valorComida = hamburguer1.valor + hamburguer2.valor + hamburguer3.valor;

texto = `A compra do ${hamburguer1.nome}(${hamburguer1.ingredientes[0]}), ${hamburguer2.nome}, ${hamburguer3.nome} tem o valor total de ${valorComida} reais`
console.log(`Contexto 4/4: ${texto}`)

// ______________________________________________________________________________________________________________________________________________________
// CONTEXTO 5

let exercicio = ['flexão', 'barra', 'abdominal', 'agachamento', 'alongamento'];

console.log(exercicio);

exercicio = [
    {
    exercicioA: {
        musculo: 'peito',
        tipoExercicio: ['supino', 'fly']
    }
    },
    {
    exercicioB: {
        musculo: 'costas',
        tipoExercicio: ['remada alta', 'remada unilateral']
    }
        
    }
];

console.log(exercicio)
console.log(exercicio[0].exercicioA.tipoExercicio);


exercicio = [
    {
        tipo: {
            nome: 'A', 
            musculo: 'Peito'
        },
        exercicios: ['supino', 'fly']
    },
    {
        tipo: {
            nome:'B',
            musculo: 'costas',
        },
        exercicios: ['remada alta', 'remada unilateral']
    },
    {
        tipo: {
            nome: 'A', 
            musculo: 'Peito'
        },
        exercicios: ['supino Inclinado', 'fly com alteres']
    },
]
 /**
  * Sintaxe Object
  * { //identificador genêrico: Valor (Array, objeto, string, booleano, função...)
  *   chave:valor,
  * }
  */

console.log(`Exercicios de ${exercicio[0].tipo.musculo} do tipo ${exercicio[0].tipo.nome}: ${exercicio[0].exercicios}`)


// Treino de segunda  a quarta com vários tipos de exercicios diferentes
// quando for finito criar em formato de objeto

let diasSemana = {
    segunda: {
        tipo: {
            nome: 'A',
            categoria: 'Treino Superior'
        },
        exercicio: [
        {
        musculo: 'peito',
        tipoExercicio: 'supino reto'
        }, 
        {
        musculo: 'peito',
        tipoExercicio: 'supino inclinado'  
        },
        {
        musculo: 'costas',
        tipoExercicio: 'remada alta'
        }
        ],
    }
}

//Exibir conforme o exemplo:
// Treino Superior dos exercicios costas, remada alta...

console.log(diasSemana.segunda.exercicio[2].tipoExercicio);
console.log(`O ${diasSemana.segunda.tipo.categoria} dos exercícios ${diasSemana.segunda.exercicio[2].musculo}, ${diasSemana.segunda.exercicio[2].tipoExercicio}`);