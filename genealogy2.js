let pessoas = [
    {
    nome: "Edilson",
    idade: 40,
    sexo: "masculino",
    },
    {
    nome: "Leda",
    idade: 68,
    Sexo: "feminino"
    },
    {
    nome: "Antenor",
    idade: 67,
    sexo: "masculino",
    },
    {
    nome: "Gregório",
    idade: 38,
    sexo: "masculino",
    },
    {
    nome: "Tancredo",
    idade: 36,
    sexo: "masculino",
    },
    {
    nome: "Maycon",
    idade: 18,
    sexo: "masculino",
    },
    {
    nome: "Eron",
    idade: 15,
    sexo: "masculino",
    },
    {
    nome: "Rayane",
    idade: 12,
    sexo: "feminino",
    },
    {
    nome: "Laura",
    idade: 2,
    sexo: "feminino",
    },
    {
    nome: "Adriana",
    idade: 40,
    sexo: "feminino",
    },
    {
    nome: "Dejanira",
    idade: 80,
    sexo: "feminino",
    },
    {
    nome: "João",
    idade: 80,
    sexo: "masculino",
    },
    {
    nome: "Sebastiana",
    idade: 80,
    sexo: "feminino",
    },
    {
    nome: "José",
    idade: 80,
    sexo: "masculino",
    },
    {
    nome: "Gabriel",
    idade: 9,
    sexo: "masculino",
    },
    {
    nome: "Felipe",
    idade: 5,
    sexo: "masculino",
    },
    {
    nome: "Maya",
    idade: 2,
    sexo: "feminino",
    },
    {
    nome: "Victor",
    idade: 17,
    sexo: "masculino",
    },
    {
    nome: "Raul",
    idade: 9,
    sexo: "masculino",
    },
];

pessoas[2].pais = [pessoas[0], pessoas[3], pessoas[4]];
pessoas[1].pais = [pessoas[0], pessoas[3], pessoas[4]];
pessoas[0].irmaos = [pessoas[3], pessoas[4]];
pessoas[5].filhos = [pessoas[0]];
pessoas[6].filhos = [pessoas[0]];
pessoas[7].filhos = [pessoas[0]];
pessoas[8].filhos = [pessoas[0]];
pessoas[9].conjugue = [pessoas[0]];
pessoas[10].avos_maternos = [pessoas[0], pessoas[3], pessoas[4]];
pessoas[11].avos_maternos = [pessoas[0], pessoas[3], pessoas[4]];
pessoas[12].avos_paternos = [pessoas[0], pessoas[3], pessoas[4]];
pessoas[13].avos_paternos = [pessoas[0], pessoas[3], pessoas[4]];
pessoas[14].sobrinhos = [pessoas[0]];
pessoas[15].sobrinhos = [pessoas[0]];
pessoas[16].sobrinhos = [pessoas[0]];
pessoas[17].sobrinhos = [pessoas[0]];
pessoas[18].sobrinhos = [pessoas[0]];

let arvoreEdilson = {
    ...pessoas[0],
    pais: [pessoas[1], pessoas[2]],
    irmaos: [pessoas[3], pessoas[4]],
    filhos: [pessoas[5], pessoas[6], pessoas[7], pessoas[8]],
    conjugue: [pessoas[9]],
    avos_maternos: [pessoas[10], pessoas[11]],
    avos_paternos: [pessoas[12], pessoas[13]],
    sobrinhos: [pessoas[14], pessoas[15], pessoas[16], pessoas[17], pessoas[18]],
};

  console.log(arvoreEdilson);