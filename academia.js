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
  a: [
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
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[3],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[7],
      repeticoes: 8,
      series: 4,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
  ],
  b: [
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
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Triceps.Exercicios[1],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Triceps.Exercicios[2],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Triceps.Exercicios[3],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Panturrilha.Exercicios[0],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Panturrilha.Exercicios[1],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[9],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
  ],
  c: [
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
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[0],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[6],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
    {
      nome: listaExerciciosPorTipo.Abdominal.Exercicios[5],
      repeticoes: 10,
      series: 3,
      pausa: 60,
      tempoCadaMovimento: 4,
    },
  ],
};

let r1 = registroAlunosAcademia[0].treinos.a[0].repeticoes;
let s1 = registroAlunosAcademia[0].treinos.a[0].series;
let p1 = registroAlunosAcademia[0].treinos.a[0].pausa;
let m1 = registroAlunosAcademia[0].treinos.a[0].tempoCadaMovimento;
let q1 = registroAlunosAcademia[0].treinos.a.length;


let calculoTempoTreinoA = ((m1 * r1) + p1) * (s1 * q1) / 60;

console.log(calculoTempoTreinoA);

let r2 = registroAlunosAcademia[0].treinos.b[0].repeticoes;
let s2 = registroAlunosAcademia[0].treinos.b[0].series;
let p2 = registroAlunosAcademia[0].treinos.b[0].pausa;
let m2 = registroAlunosAcademia[0].treinos.b[0].tempoCadaMovimento;
let q2 = registroAlunosAcademia[0].treinos.b.length;


let calculoTempoTreinoB = ((m2 * r2) + p2) * (s2 * q2) / 60;

console.log(calculoTempoTreinoB);

let r3 = registroAlunosAcademia[0].treinos.c[0].repeticoes;
let s3 = registroAlunosAcademia[0].treinos.c[0].series;
let p3 = registroAlunosAcademia[0].treinos.c[0].pausa;
let m3 = registroAlunosAcademia[0].treinos.c[0].tempoCadaMovimento;
let q3 = registroAlunosAcademia[0].treinos.c.length;


let calculoTempoTreinoC = ((m3 * r3) + p3) * (s3 * q3) / 60;

console.log(calculoTempoTreinoC);

console.log(`Treino do ${registroAlunosAcademia[0].nome}`);
console.log(registroAlunosAcademia[0].treinos);
console.log(`O Treino A do Edilson leva em torno de ${calculoTempoTreinoA} minutos para ser concluído.`)
console.log(`O Treino B do Edilson leva em torno de ${calculoTempoTreinoB} minutos para ser concluído.`)
console.log(`O Treino C do Edilson leva em torno de ${calculoTempoTreinoC} minutos para ser concluído.`)




