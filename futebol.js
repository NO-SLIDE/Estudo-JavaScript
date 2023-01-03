      let copaDoMundo2022 = {
        grupoA: {
          times: [
            "Holanda",
            "Senegal",
            "Equador",
            "Catar",
          ],
        },
        grupoB: {
          times: [
            "Inglaterra",
            "Estados Unidos",
            "Irã",
            "Gales",
          ],
        },
        grupoC: {
          times: [
            "Argentina",
            "Polônia",
            "México",
            "Arábia Saudita",
          ],
        },
        grupoD: {
          times: [
            "França",
            "Austrália",
            "Túnisia",
            "Dinamarca",
          ],
        },
        grupoE: {
          times: [
            "Japão",
            "Espanha",
            "Alemanha",
            "Costa Rica",
          ],
        },
        grupoF: {
          times: [
            "Marrocos",
            "Croácia",
            "Bélgica",
            "Canadá",
          ],
        },
        grupoG: {
          times: [
            "Brasil",
            "Suiça",
            "Camarões",
            "Sérvia",
          ],
        },
        grupoH: {
          times: [
            "Portugal",
            "Coreia do Sul",
            "Uruguai",
            "Gana",
          ],
        },
      };

      let timeGrupoA = copaDoMundo2022.grupoA.times;
      let timeGrupoB = copaDoMundo2022.grupoB.times;
      let timeGrupoC = copaDoMundo2022.grupoC.times;
      let timeGrupoD = copaDoMundo2022.grupoD.times;
      let timeGrupoE = copaDoMundo2022.grupoE.times;
      let timeGrupoF = copaDoMundo2022.grupoF.times;
      let timeGrupoG = copaDoMundo2022.grupoG.times;
      let timeGrupoH = copaDoMundo2022.grupoH.times;

      let oitavasFinal = 'OITAVAS DE FINAL - FASE ELIMINATÓRIA';

      let jogoOitavas1 = `   ${timeGrupoA[0]}  3  x  1  ${timeGrupoB[1]}`;
      let jogoOitavas2 = ` ${timeGrupoC[0]}  2  x  1  ${timeGrupoD[1]}`;
      let jogoOitavas3 = `     ${timeGrupoE[0]}  1  x  1  ${timeGrupoF[1]} - PÊNALTIS - ${timeGrupoE[0]}  1  x  3  ${timeGrupoF[1]}`;
      let jogoOitavas4 = `    ${timeGrupoG[0]}  4  x  1  ${timeGrupoH[1]}`;
      let jogoOitavas5 = `    ${timeGrupoD[0]}  3  x  1  ${timeGrupoC[1]}`;
      let jogoOitavas6 = `${timeGrupoB[0]}  3  x  0  ${timeGrupoA[1]}`;
      let jogoOitavas7 = `  ${timeGrupoF[0]}  0  x  0  ${timeGrupoE[1]} - PÊNALTIS - ${timeGrupoF[0]}  3  x  0  ${timeGrupoE[1]}`;
      let jogoOitavas8 = `  ${timeGrupoH[0]}  6  x  1  ${timeGrupoG[1]}`;

      console.log(oitavasFinal);
      console.log(jogoOitavas1);
      console.log(jogoOitavas2);
      console.log(jogoOitavas3);
      console.log(jogoOitavas4);
      console.log(jogoOitavas5);
      console.log(jogoOitavas6);
      console.log(jogoOitavas7);
      console.log(jogoOitavas8);

      let divisao1 = ' ';

      let quartasFinal = 'QUARTAS DE FINAL - FASE ELIMINATÓRIA';

      let jogoQuartas1 = `   ${timeGrupoA[0]}  2  x  2  ${timeGrupoC[0]} - PÊNALTIS -${timeGrupoA[0]}  3  x  4  ${timeGrupoC[0]}`;
      let jogoQuartas2 = `   ${timeGrupoF[1]}  1  x  1  ${timeGrupoG[1]} - PÊNALTIS - ${timeGrupoF[1]}  4  x  2  ${timeGrupoG[1]}`;
      let jogoQuartas3 = `${timeGrupoB[0]}  1  x  2  ${timeGrupoD[0]}`;
      let jogoQuartas4 = `  ${timeGrupoF[0]}  1  x  0  ${timeGrupoH[0]}`;

      console.log(divisao1);
      console.log(quartasFinal);
      console.log(jogoQuartas1);
      console.log(jogoQuartas2);
      console.log(jogoQuartas3);
      console.log(jogoQuartas4);

      let divisao2 = ' ';

      let semiFinal = 'SEMIFINAL - FASE ELIMINATÓRIA';

      let jogoSemiFinal1 = ` ${timeGrupoC[0]}  3  x  0  ${timeGrupoF[1]}`;
      let jogoSemiFinal2 = `    ${timeGrupoD[0]}  2  x  0  ${timeGrupoF[0]}`;

      console.log(divisao2);
      console.log(semiFinal);
      console.log(jogoSemiFinal1);
      console.log(jogoSemiFinal2);

      let divisao3 = ' ';

      let finalCopa = 'FINAL DA COPA - FASE ELIMINATÓRIA';

      let jogoFinal = ` ${timeGrupoC[0]}  3  x  3  ${timeGrupoD[0]} - PÊNALTIS - ${timeGrupoC[0]}  4  x  2  ${timeGrupoD[0]}`;

      let divisao4 = ' ';

      let vencedorCopa = ' ⭐⭐⭐ ARGENTINA TRI-CAMPEÃ MUNDIAL DA COPA QATAR 2022 ⭐⭐⭐';

      console.log(divisao3);
      console.log(finalCopa);

      console.log(jogoFinal);
      console.log(divisao4);
      console.log(vencedorCopa);