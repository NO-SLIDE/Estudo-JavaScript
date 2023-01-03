
let registroAlunosAcademia = {
        aluno1: {
          Objetivo: "Perda de Peso",
          nome: "Edilson Aparecido de Paula Souza",
          idade: 40,
          peso: 108,
          altura: 1.86,
          data_de_inicio: "01/01/2023",
        },
          aluno2: {
          Objetivo: "Hipertrofia",
          nome: "João Apostulo Neto",
          idade: 25,
          peso: 75,
          altura: 1.68,
          data_de_inicio: "02/08/2022",
        }
      };

let listaExerciciosPorTipo = {
        Orientacoes: {
            Cardio: 10,
            Pausa_Entre_Series: 60,
            Tempo_Execucao_Cada_Movimento: 3,
        },
        Peito: {
          Exercicios: [
            "Supino Reto - 3 x 10",
            "Fly Inclinado - 3 x 10",
            "Peck Deck - 3 x 10",
            "Crucifixo Inclinado - 3 x 10",
            "Pull Over - 3 x 10",
            "Flexão - 3 x 10",
            "Voador - 3 x 10",
            "Paralelas - 3 x 10",
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
        Biceps: {
          Exercicios: [
            "Rosca Direta - 3 x 10",
            "Rosca Scott - 3 x 10",
            "Rosca Alternada - 3 x 10",
            "Rosca Martelo - 3 x 10",
            "Rosca Concentrada - 3 x 10",
            "Barra Supinada - 3 x 10",
            "Rosca Polia - 3 x 10",
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

      let musculacao = {
        A: {
          Treino: [
            listaExerciciosPorTipo.Peito.Exercicios[1],
            listaExerciciosPorTipo.Peito.Exercicios[3],
            listaExerciciosPorTipo.Peito.Exercicios[4],
            listaExerciciosPorTipo.Peito.Exercicios[1],
            listaExerciciosPorTipo.Biceps.Exercicios[1],
            listaExerciciosPorTipo.Biceps.Exercicios[2],
            listaExerciciosPorTipo.Biceps.Exercicios[4],
            listaExerciciosPorTipo.Abdominal.Exercicios[1],
            listaExerciciosPorTipo.Abdominal.Exercicios[7],
            listaExerciciosPorTipo.Abdominal.Exercicios[8],
            listaExerciciosPorTipo.Abdominal.Exercicios[2],
          ],
        },
        B: {
          Treino: [
            listaExerciciosPorTipo.Costas.Exercicios[0],
            listaExerciciosPorTipo.Costas.Exercicios[1],
            listaExerciciosPorTipo.Costas.Exercicios[4],
            listaExerciciosPorTipo.Triceps.Exercicios[0],
            listaExerciciosPorTipo.Triceps.Exercicios[1],
            listaExerciciosPorTipo.Triceps.Exercicios[2],
            listaExerciciosPorTipo.Triceps.Exercicios[3],
            listaExerciciosPorTipo.Panturrilha.Exercicios[0],
            listaExerciciosPorTipo.Panturrilha.Exercicios[1],
            listaExerciciosPorTipo.Abdominal.Exercicios[9],
          ],
        },
        C: {
          Treino: [
            listaExerciciosPorTipo.Coxa.Exercicios[6],
            listaExerciciosPorTipo.Coxa.Exercicios[7],
            listaExerciciosPorTipo.Coxa.Exercicios[4],
            listaExerciciosPorTipo.Ombro.Exercicios[0],
            listaExerciciosPorTipo.Ombro.Exercicios[1],
            listaExerciciosPorTipo.Ombro.Exercicios[4],
            listaExerciciosPorTipo.Ombro.Exercicios[4],
            listaExerciciosPorTipo.Abdominal.Exercicios[9],
            listaExerciciosPorTipo.Abdominal.Exercicios[4],
          ],
        },
      };

      let n1 = listaExerciciosPorTipo.Orientacoes.Pausa_Entre_Series;
      let n2 = listaExerciciosPorTipo.Orientacoes.Tempo_Execucao_Cada_Movimento;
      let n3 = musculacao.A.Treino.length;
      let n4 = musculacao.B.Treino.length;
      let n5 = musculacao.C.Treino.length;

      function calculoTempo(n1, n2, n3) {
        let tempo = (n1 * 3) * (n3 / 60) + 10 + ((n2 * 10) * 3) / 60 * n3;
        return tempo;
      }

      let tempoTreinoA = calculoTempo(n1, n2, n3);
      let tempoTreinoB = calculoTempo(n1, n2, n4);
      let tempoTreinoC = calculoTempo(n1, n2, n5);

      let cabecalho = [`________________* TREINO DE MUSCULAÇÃO *________________`];

      console.log(cabecalho);
      console.log(registroAlunosAcademia.aluno1);
      console.log(listaExerciciosPorTipo.Orientacoes);
      let calcTreinoAEdilson = `O treino A do Edilson leva em torno de ${tempoTreinoA} minutos para ser concluído`;
      console.log(calcTreinoAEdilson);
      let calcTreinoBEdilson = `O treino B do Edilson leva em torno de ${tempoTreinoB} minutos para ser concluído`;
      console.log(calcTreinoBEdilson);
      let calcTreinoCEdilson = `O treino C do Edilson leva em torno de ${tempoTreinoC} minutos para ser concluído`;
      console.log(calcTreinoCEdilson);
      console.log(musculacao);
      console.log(cabecalho);
      console.log(registroAlunosAcademia.aluno2);
      console.log(listaExerciciosPorTipo.Orientacoes);
      let calcTreinoAJoao = `O treino A do João leva em torno de ${tempoTreinoA} minutos para ser concluído`;
      console.log(calcTreinoAJoao);
      let calcTreinoBJoao = `O treino B do João leva em torno de ${tempoTreinoB} minutos para ser concluído`;
      console.log(calcTreinoBJoao);
      let calcTreinoCJoao = `O treino C do João leva em torno de ${tempoTreinoC} minutos para ser concluído`;
      console.log(calcTreinoCJoao);
      console.log(musculacao);
      
      

      // Na estrutura atual do último exercício (academia) montar lista de treinamento por pessoa (treinoEdilson, treinoJoao) onde:

      // ## 1º
      // Cada um dos tipos de treinos (a,b,c) deve ser adicionado a repetição, tempo de descanso e algumas dicas (não obrigatório)
      
      // ## 2º
      // Na lista de exercícios adicionar o tempo médio de execução (ex: o tempo médio de uma execução de um supino dura 2s), levar em consideração apenas uma repetição (levantar e abaixar)
      
      // ## 3º
      // Fazer o calculo de tempo de duração do treino baseado nas informações de descanso + execução + repetição do exercício e exibir o valor conforme informação abaixo
      // O treino do Edilson leva em torno de ``1 hora`` para ser concluído.



     