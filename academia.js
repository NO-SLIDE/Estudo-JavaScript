let registroAlunosAcademia = [
  {
    nome: "Edilson Aparecido de Paula Souza",
    Objetivo: "Perda de Peso",
    idade: 40,
    peso: 108,
    altura: 1.86,
    data_de_inicio: "01/01/2023",
    treinos: {},
  },
  {
    nome: "João Apostulo Neto",
    Objetivo: "Hipertrofia",
    idade: 25,
    peso: 75,
    altura: 1.68,
    data_de_inicio: "02/08/2022",
    treinos: {},
  },
];

let listaExerciciosPorTipo = {
  Peito: {
    Exercicios: [
      "Supino Reto",
      "Crucifixo Inclinado",
      "Peck Deck",
      "Fly Inclinado",
      "Pull Over",
      "Flexão",
      "Voador",
      "Paralelas",
    ],
  },
  Biceps: {
    Exercicios: [
      "Rosca Direta",
      "Rosca Alternada",
      "Rosca Concentrada",
      "Martelo Simultâneo",
      "Rosca na Polia",
      "Rosca Scott",
    ],
  },
  Costas: {
    Exercicios: [
      "Puxada Puley - 3 x 10",
      "Remada Máquina - 3 x 10",
      "Remada Unilateral - 3 x 10",
      "Voador Dorsal - 3 x 10",
      "Remada Curvada - 3 x 10",
      "Remada Aberta - 3 x 10",
      "Flexão Ombros - 3 x 10",
      "Barra Fixa - 3 x 10",
      "Remada Cavalo - 3 x 10",
    ],
  },
  Triceps: {
    Exercicios: [
      "Pulley Chifre - 3 x 10",
      "Pulley Reto - 3 x 10",
      "Pulley Corda - 4 x 8",
      "Frances - 3 x 10",
      "Quebra Testa - 3 x 10",
      "Mergulho Banco - 3 x 10",
      "Paralelas - 3 x 10",
    ],
  },
  Ombro: {
    Exercicios: [
      "Elevação Lateral - 3 x 10",
      "Elevação Frontal - 3 x 10",
      "Elevação Unilateral - 3 x 10",
      "Arnold Press - 3 x 10",
      "Desenvolvimento Lateral - 3 x 10",
      "Remada Alta Cross - 3 x 10",
      "Crucifixo Inverso - 3 x 10",
      "Encolhimento - 3 x 10",
    ],
  },
  Coxa: {
    Exercicios: [
      "Agachamento Livre - 3 x 10",
      "Hack - 3 x 10",
      "Afundo - 3 x 10",
      "Stiff - 3 x 10",
      "Leg Press 45° - 3 x 10",
      "Levantamento Terra - 3 x 10",
      "Cadeira Extenssora - 3 x 10",
      "Cama Flexora - 3 x 10",
      "Agachamento Bulgaro - 3 x 10",
    ],
  },
  Panturrilha: {
    Exercicios: [
    "Elevação em Pé - 3 x 10", 
    "Elevação Sentado - 3 x 10", 
    "Elevação Leg 45° - 3 x 10",
    ],
  },
  Abdominal: {
    Exercicios: [
      "Abdominal Reta - 3 x 10",
      "Abdominal Máquina - 3 x 10",
      "Abdominal Infra Barra - 3 x 10",
      "Abdominal Lateral - 3 x 10",
      "Prancha Abdominal - 3 x 10",
      "Abdominal Canivete - 3 x 10",
      "Abdominal Remador - 3 x 10",
      "Abdominal Rotação - 3 x 10",
      "Abdominal Ponte - 43 x 10",
      "DL - 3 x 10",
    ],
  },
};

registroAlunosAcademia[0].treinos = {
  Treino_A: [
    {
      nome: listaExerciciosPorTipo.Peito.Exercicios[0],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Peito.Exercicios[1],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Peito.Exercicios[2],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Peito.Exercicios[3],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Biceps.Exercicios[0],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Biceps.Exercicios[1],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Biceps.Exercicios[2],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Biceps.Exercicios[3],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[1],
      repeticoes: 20,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[2],
      repeticoes: 20,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[3],
      repeticoes: 20,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
  ],
  Treino_B: [
    {
      nome: listaExerciciosPorTipo.Costas.Exercicios[0],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Costas.Exercicios[1],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Costas.Exercicios[2],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Costas.Exercicios[3],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Triceps.Exercicios[0],
      repeticoes: 8,
      series: 4,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Triceps.Exercicios[1],
      repeticoes: 8,
      series: 4,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Triceps.Exercicios[2],
      repeticoes: 8,
      series: 4,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Panturrilha.Exercicios[0],
      repeticoes: 15,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Panturrilha.Exercicios[1],
      repeticoes: 15,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Panturrilha.Exercicios[2],
      repeticoes: 15,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[9],
      repeticoes: 20,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
  ],
  Treino_C: [
    {
      nome: listaExerciciosPorTipo.Ombro.Exercicios[0],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Ombro.Exercicios[1],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Ombro.Exercicios[2],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Ombro.Exercicios[3],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Coxa.Exercicios[0],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Coxa.Exercicios[1],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Coxa.Exercicios[2],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Coxa.Exercicios[3],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[3],
      repeticoes: 20,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[4],
      repeticoes: 20,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[6],
      repeticoes: 20,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
  ],
};


console.table(registroAlunosAcademia);
console.log(`Treino do ${registroAlunosAcademia[0].nome}`);
console.log(registroAlunosAcademia[0].treinos);


let treinoA = registroAlunosAcademia[0].treinos.Treino_A;

let r1 = `${treinoA[0].repeticoes + treinoA[1].repeticoes + treinoA[2].repeticoes + treinoA[3].repeticoes + treinoA[4].repeticoes + treinoA[5].repeticoes + treinoA[6].repeticoes + treinoA[7].repeticoes + treinoA[8].repeticoes + treinoA[9].repeticoes + treinoA[10].repeticoes}`;
console.log(r1);

let s1 = `${treinoA[0].series + treinoA[1].series + treinoA[2].series + treinoA[3].series + treinoA[4].series + treinoA[5].series + treinoA[6].series + treinoA[7].series + treinoA[8].series + treinoA[9].series + treinoA[10].series}`;
console.log(s1);

let p1 = `${treinoA[0].pausa + treinoA[1].pausa + treinoA[2].pausa + treinoA[3].pausa + treinoA[4].pausa + treinoA[5].pausa + treinoA[6].pausa + treinoA[7].pausa + treinoA[8].pausa + treinoA[9].pausa + treinoA[10].pausa}`;
console.log(p1);

let m1 = `${treinoA[0].tempoCadaMovimento + treinoA[1].tempoCadaMovimento + treinoA[2].tempoCadaMovimento + treinoA[3].tempoCadaMovimento + treinoA[4].tempoCadaMovimento + treinoA[5].tempoCadaMovimento + treinoA[6].tempoCadaMovimento + treinoA[7].tempoCadaMovimento + treinoA[8].tempoCadaMovimento + treinoA[9].tempoCadaMovimento + treinoA[10].tempoCadaMovimento}`;
console.log(m1);



let treinoB = registroAlunosAcademia[0].treinos.Treino_B;

let r2 = `${treinoB[0].repeticoes + treinoB[1].repeticoes + treinoB[2].repeticoes + treinoB[3].repeticoes + treinoB[4].repeticoes + treinoB[5].repeticoes + treinoB[6].repeticoes + treinoB[7].repeticoes + treinoB[8].repeticoes + treinoB[9].repeticoes + treinoB[10].repeticoes}`;
console.log(r2);

let s2 = `${treinoB[0].series + treinoB[1].series + treinoB[2].series + treinoB[3].series + treinoB[4].series + treinoB[5].series + treinoB[6].series + treinoB[7].series + treinoB[8].series + treinoB[9].series + treinoB[10].series}`;
console.log(s2);

let p2 = `${treinoB[0].pausa + treinoB[1].pausa + treinoB[2].pausa + treinoB[3].pausa + treinoB[4].pausa + treinoB[5].pausa + treinoB[6].pausa + treinoB[7].pausa + treinoB[8].pausa + treinoB[9].pausa + treinoB[10].pausa}`;
console.log(p2);

let m2 = `${treinoB[0].tempoCadaMovimento + treinoB[1].tempoCadaMovimento + treinoB[2].tempoCadaMovimento + treinoB[3].tempoCadaMovimento + treinoB[4].tempoCadaMovimento + treinoB[5].tempoCadaMovimento + treinoB[6].tempoCadaMovimento + treinoB[7].tempoCadaMovimento + treinoB[8].tempoCadaMovimento + treinoB[9].tempoCadaMovimento + treinoB[10].tempoCadaMovimento}`;
console.log(m2);



let treinoC = registroAlunosAcademia[0].treinos.Treino_C;

let r3 = `${treinoC[0].repeticoes + treinoC[1].repeticoes + treinoC[2].repeticoes + treinoC[3].repeticoes + treinoC[4].repeticoes + treinoC[5].repeticoes + treinoC[6].repeticoes + treinoC[7].repeticoes + treinoC[8].repeticoes + treinoC[9].repeticoes + treinoC[10].repeticoes}`;
console.log(r3);

let s3 = `${treinoC[0].series + treinoC[1].series + treinoC[2].series + treinoC[3].series + treinoC[4].series + treinoC[5].series + treinoC[6].series + treinoC[7].series + treinoC[8].series + treinoC[9].series + treinoC[10].series}`;
console.log(s3);

let p3 = `${treinoC[0].pausa + treinoC[1].pausa + treinoC[2].pausa + treinoC[3].pausa + treinoC[4].pausa + treinoC[5].pausa + treinoC[6].pausa + treinoC[7].pausa + treinoC[8].pausa + treinoC[9].pausa + treinoC[10].pausa}`;
console.log(p3);

let m3 = `${treinoC[0].tempoCadaMovimento + treinoC[1].tempoCadaMovimento + treinoC[2].tempoCadaMovimento + treinoC[3].tempoCadaMovimento + treinoC[4].tempoCadaMovimento + treinoC[5].tempoCadaMovimento + treinoC[6].tempoCadaMovimento + treinoC[7].tempoCadaMovimento + treinoC[8].tempoCadaMovimento + treinoC[9].tempoCadaMovimento + treinoC[10].tempoCadaMovimento}`;
console.log(m3);






