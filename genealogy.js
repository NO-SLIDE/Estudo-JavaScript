let minhaArvoreGenialogica = [
    {
    Meu_Nome: "Edilson",
    Idade: 40,
    Nascimento: "01/04/1982",
    Sexo: "Masculino",
    Conjugue: {},
    Filhos: {},
    Pais: {},
    Irmaos: {},
    },
];
minhaArvoreGenialogica[0].Conjugue = [
    {
    Nome_do_Conjugue: "Adriana",
    Idade: 40,
    Nascimento: "16/10/1982",
    Sexo: "Feminino",
    Conjugue: `${minhaArvoreGenialogica[0].Meu_Nome}`,
    Filhos: {},
    },
];
minhaArvoreGenialogica[0].Conjugue[0].Filhos = [
    {
    Nome_do_Filho: "Gabriel",
    Idade: 15,
    Nascimento: "24/07/2007",
    Sexo: "Masculino",
    Mae: `${minhaArvoreGenialogica[0].Conjugue[0].Nome_do_Conjugue}`,
    Pais: "José Severino",
    },
    {
    Nome_da_Filha: "Laura",
    Idade: 2,
    Nascimento: "02/06/2020",
    Sexo: "Feminino",
    Mae: `${minhaArvoreGenialogica[0].Conjugue[0].Nome_do_Conjugue}`,
    Pai: `${minhaArvoreGenialogica[0].Meu_Nome}`,
    },
];
minhaArvoreGenialogica[0].Filhos = [
    {
    Nome_do_Filho: "Maycon",
    Idade: 19,
    Nascimento: "29/11/2003",
    Sexo: "Masculino",
    Mae: "Vivian Maria",
    Pai: `${minhaArvoreGenialogica[0].Meu_Nome}`,
    },
    {
    Nome_do_Filho: "Eron",
    Idade: 15,
    Nascimento: "01/10/2007",
    Sexo: "Masculino",
    Mae: "Vivian Maria",
    Pai: `${minhaArvoreGenialogica[0].Meu_Nome}`,
    },
    {
    Nome_da_Filha: "Rayane",
    Idade: 12,
    Nascimento: "27/12/2010",
    Sexo: "Feminino",
    Mae: "Vivian Maria",
    Pai: `${minhaArvoreGenialogica[0].Meu_Nome}`,
    },
    {
    Nome_da_Filha: "Laura",
    Idade: 2,
    Nascimento: "02/06/2020",
    Sexo: "Feminino",
    Mae: `${minhaArvoreGenialogica[0].Conjugue[0].Nome_do_Conjugue}`,
    Pai: `${minhaArvoreGenialogica[0].Meu_Nome}`,
    },
];
minhaArvoreGenialogica[0].Pais = [
    {
    Nome_da_Mae: "Maria",
    Idade: 68,
    Nascimento: "31/12/1953",
    Sexo: "Feminino",
    Filhos: {},
    Pais: {},
    Irmaos: {},    
    },
    {
    Nome_do_Pai: "Antenor",
    Idade: 67,
    Nascimento: "29/03/1954",
    Sexo: "Masculino",
    Pais: {},
    Irmaos: {},
    },
];
minhaArvoreGenialogica[0].Irmaos = [
    {
    Nome_do_Irmao: "Gregório",
    Idade: 38,
    Nascimento: "16/08/1984",
    Sexo: "Masculino",
    Filhos: {},
    },
    {
    Nome_do_Irmao: "Tancredo",
    Idade: 36,
    Nascimento: "23/02/1986",
    Sexo: "Masculino",
    Filhos: {},
    },
];
minhaArvoreGenialogica[0].Pais[0].Filhos = [
    `${minhaArvoreGenialogica[0].Meu_Nome}`, 
    `${minhaArvoreGenialogica[0].Irmaos[0].Nome_do_Irmao}`, 
    `${minhaArvoreGenialogica[0].Irmaos[1].Nome_do_Irmao}`,
];
minhaArvoreGenialogica[0].Pais[0].Pais = [
    {
    Nome_da_Avo: "Dejanira",
    Idade: 83,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    },
    {
    Nome_do_Avo: "João",
    Idade: 83,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    },
];
minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos = [
    {
    Nome_do_Tio: "Floro",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    Filhos: {},
    },
    {
    Nome_do_Tio: "Fernando",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    },
    {
    Nome_do_Tio: "Flavio",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    },
    {
    Nome_do_Tio: "Flauviano",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    },
    {
    Nome_do_Tio: "Pereira",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    },
    {
    Nome_do_Tio: "Bosco",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    },
    {
    Nome_da_Tia: "Zelia",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    },
    {
    Nome_da_Mae: `${minhaArvoreGenialogica[0].Pais[0].Nome_da_Mae}`,
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    },
    {
    Nome_da_Tia: "Fátima",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    },
    {
    Nome_da_Tia: "Verônica",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    },
    {
    Nome_da_Tia: "Mônica",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    },
    {
    Nome_da_Tia: "Marta",
    Idade: 40,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    },
];
minhaArvoreGenialogica[0].Pais[0].Irmaos = [
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[0].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[1].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[2].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[3].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[4].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[5].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[6].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[0].Nome_da_Mae}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[8].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[9].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[10].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos[11].Nome_da_Tia}`,
];
minhaArvoreGenialogica[0].Pais[1].Pais = [
    {
    Nome_da_Avo: "Sebastiana",
    Idade: 83,
    Nascimento: "01/01/2000",
    Sexo: "Feminino",
    Filhos: {},
    Pais: "Desconhecido",
    },
    {
    Nome_do_Avo: "José",
    Idade: 83,
    Nascimento: "01/01/2000",
    Sexo: "Masculino",
    Pais: "Desconhecidos",
    },
];
minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos = [
    {
        Nome_do_Tio: "Lourival",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Masculino",
        Filhos: {},
        },
        {
        Nome_do_Tio: "Sebastião",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Masculino",
        },
        {
        Nome_do_Tio: "Gonçalo",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Masculino",
        },
        {
        Nome_do_Pai: `${minhaArvoreGenialogica[0].Pais[1].Nome_do_Pai}`,
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Masculino",
        },
        {
        Nome_do_Tio: "Darque",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Masculino",
        },
        {
        Nome_do_Tio: "Zinho",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Masculino",
        },
        {
        Nome_da_Tia: "Aninha",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Feminino",
        Filhos: {},
        },
        {
        Nome_da_Tia: "Maria",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Feminino",
        Filhos: {},
        },
        {
        Nome_da_Tia: "Candinha",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Feminino",
        Filhos: {},
        },
        {
        Nome_da_Tia: "Clara",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Feminino",
        Filhos: {},
        },
        {
        Nome_da_Tia: "Benedita",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Feminino",
        Filhos: {},
        },
        {
        Nome_da_Tia: "Nina",
        Idade: 40,
        Nascimento: "01/01/2000",
        Sexo: "Feminino",
        Filhos: {},
        },
];
minhaArvoreGenialogica[0].Pais[1].Irmaos = [
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[0].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[1].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[2].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[1].Nome_do_Pai}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[4].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[5].Nome_do_Tio}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[6].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[7].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[8].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[9].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[10].Nome_da_Tia}`,
    `${minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos[11].Nome_da_Tia}`,
];
minhaArvoreGenialogica[0].Irmaos[0].Filhos = [
    {
    Nome_do_Filho: "Gabriel",
    Idade: 9,
    Nascimento: "25/02/2014",
    Sexo: "Masculino",
    Mae: "Mariana",
    Pai: `${minhaArvoreGenialogica[0].Meu_Nome}`,
    },
    {
    Nome_do_Filho: "Felipe",
    Idade: 7,
    Nascimento: "25/03/2016",
    Sexo: "Masculino",
    Mae: "Mariana",
    },
    {
    Nome_da_Filha: "Maya",
    Idade: 2,
    Nascimento: "25/11/2019",
    Sexo: "Feminino",
    Mae: "Mariana",
    },
];
minhaArvoreGenialogica[0].Irmaos[1].Filhos = [
    {
    Nome_do_Filho: "Victor",
    Idade: 18,
    Nascimento: "25/02/2004",
    Sexo: "Masculino",
    Mae: "Adriana",
    },
    {
    Nome_do_Filho: "Raul",
    Idade: 9,
    Nascimento: "25/03/2014",
    Sexo: "Masculino",
    Mae: "Jaqueline",
    },
];

    
console.log(minhaArvoreGenialogica);
console.log(minhaArvoreGenialogica[0].Conjugue[0]);
console.log(minhaArvoreGenialogica[0].Filhos);
console.log(minhaArvoreGenialogica[0].Pais);
console.log(minhaArvoreGenialogica[0].Irmaos);
console.log(minhaArvoreGenialogica[0].Pais[0].Filhos);
console.log(minhaArvoreGenialogica[0].Pais[0].Pais);
console.log(minhaArvoreGenialogica[0].Pais[0].Pais[0].Filhos);
console.log(minhaArvoreGenialogica[0].Pais[0].Irmaos);
console.log(minhaArvoreGenialogica[0].Pais[1].Pais);
console.log(minhaArvoreGenialogica[0].Pais[1].Pais[0].Filhos);
console.log(minhaArvoreGenialogica[0].Pais[1].Irmaos);
console.log(minhaArvoreGenialogica[0].Irmaos[0].Filhos);
console.log(minhaArvoreGenialogica[0].Irmaos[1].Filhos);









