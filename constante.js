const updated = 'Updated for 4 session';
const level = 4;
//Seph
const SephFor = '-1'; //8
const SephDes = '+4'; //18
const SephCon = '+2'; //14
const SephInt = '+1'; //13
const SephSab = '+1'; //13
const SephCar = '+3'; //16
//--------------------//
//Bruce
const BruceFor = '-1'; //8
const BruceDes = '+4'; //18
const BruceCon = '+2'; //14
const BruceInt = '+1'; //13
const BruceSab = '+1'; //13
const BruceCar = '+3'; //16
//---------------------//
//Max
const MaxFor = '-1'; //8
const MaxDes = '+4'; //18
const MaxCon = '+2'; //14
const MaxInt = '+1'; //13
const MaxSab = '+1'; //13
const MaxCar = '+3'; //16
//-------------------//
//Sauer
const SauerFor = '-1'; //8
const SauerDes = '+4'; //18
const SauerCon = '+2'; //14
const SauerInt = '+1'; //13
const SauerSab = '+1'; //13
const SauerCar = '+3'; //16
//---------------------//
//Ixpexi
const IxpexiFor = '-1'; //8
const IxpexiDes = '+4'; //18
const IxpexiCon = '+2'; //14
const IxpexiInt = '+1'; //13
const IxpexiSab = '+1'; //13
const IxpexiCar = '+3'; //16
//-------------------//
exports.Bruce = {
    color: 0xFF9900,
    title: 'Bruce, the drunk',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Bruce',
    },
    description: 'Meio elfo druida, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-preview.redd.it/yZ5UVROD6_6OxAlEqsmWGUh7zmvQjozEfkgN6YMJVwc.jpg?s=034d9b98ce0837ca73cee2bf724a8e8ef7c6c987',
    },
    fields: [
        {
            name: 'AC',
            value: '11',
            inline: true,
        },
        {
            name: 'Iniciative',
            value: '+0',
            inline: true,
        },
        {
            name: 'HP',
            value: '18',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: '+2',
            inline: true,
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: '+0',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+0',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+1',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+3',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '+3',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+3',
            inline: true,
        },
        {
            name: 'Adaga',
            value: '+2 1d4',
        },
        {
            name: 'Open bar',
            value: '+2 1d10 +1d6 (if drunk)',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Vantagem contra enfeitiçamento e magias de sono',
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.StatBruce = {
    color: 0xFF9900,
    title: 'Bruce, the drunk',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Resistance stats for Bruce',
    },
    description: 'Testes de resistencia',
    thumbnail: {
        url: 'https://external-preview.redd.it/yZ5UVROD6_6OxAlEqsmWGUh7zmvQjozEfkgN6YMJVwc.jpg?s=034d9b98ce0837ca73cee2bf724a8e8ef7c6c987',
    },
    fields: [
        {
            name: 'Força',
            value: '0',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '0',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+1',
            inline: true,
        },
        {
            name: '*Inteligencia',
            value: '+5',
            inline: true,
        },
        {
            name: '*Sabedoria',
            value: '+5',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+2',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: '+3',
            inline: true,
        },
        {
            name: 'Atletismo',
            value: '+0',
            inline: true,
        },
        {
            name: 'Atuação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Blefar',
            value: '+3',
            inline: true,
        },
        {
            name: 'Furtividade',
            value: '+0',
            inline: true,
        },
        {
            name: 'Historia',
            value: '+3',
            inline: true,
        },
        {
            name: 'Intimidação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Intuição',
            value: '+5',
            inline: true,
        },
        {
            name: 'Investigação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: '+3',
            inline: true,
        },
        {
            name: 'Medicina',
            value: '+3',
            inline: true,
        },
        {
            name: 'Natureza',
            value: '+5',
            inline: true,
        },
        {
            name: 'Percepção',
            value: '+3',
            inline: true,
        },
        {
            name: 'Persuasão',
            value: '+3',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: '+0',
            inline: true,
        },
        {
            name: 'Religião',
            value: '+3',
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: '+3',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.SpellBruce = {
    color: 0xFF9900,
    title: 'Bruce, the drunk',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Spells for Bruce',
    },
    description: 'Spells list',
    thumbnail: {
        url: 'https://external-preview.redd.it/yZ5UVROD6_6OxAlEqsmWGUh7zmvQjozEfkgN6YMJVwc.jpg?s=034d9b98ce0837ca73cee2bf724a8e8ef7c6c987',
    },
    fields: [
        {
            name: 'Slots',
            value: '4 magias lvl 1 e 3 magia lvl 2',
        },        
        {
            name: 'Criar chamas 🔥',
            value: 'Faça um ataque à distância com magia. Se atingir, o alvo sofre 1d8 de dano de fogo.',
            inline: true,
        },
        {
            name: 'Rajada de veneno',
            value: 'A criatura deve ser bem sucedida num teste de resistência de Constituição ou sofrerá 1d12 de dano de veneno.',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Curar ferimento 🚑',
            value: 'Uma criatura que você tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração.',
        },
        {
            name: 'Falar com animais 🐑',
            value: 'Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração.',
        },
        {
            name: 'Onda trovejante 🌩️',
            value: 'Cada criatura deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 2d8 de dano trovejante e será empurrada. Se obtive sucesso na resistência, a criatura sofrerá metade desse dano e não será empurrada.',
        },
        {
            name: 'Palavra curativa',
            value: 'Uma criatura, à sua escolha, que você possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração.',
        },    
        {
            name: 'Esfera flamejante n2',
            value: 'A criatura sofre 2d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso.',
        },   
        {
            name: 'Raio lunar n2',
            value: 'Realizar um teste de resistência de Constituição. Ela sofre 2d10 de dano radiante se falhar na resistência ou metade desse dano se passar.',
        },                   
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.Seph = {
    color: 0xFF0099,
    title: 'Seph, the one who sings',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Seph',
    },
    description: 'Elfo Bardo, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-preview.redd.it/SZUEgrVG2kzDNZ1AjZ5Sj09USRyMe0OahJ-L0KKCvJ8.jpg?s=5ce115c504bb597b0bdccf1b44ac66ec2ad0f0b3',
    },
    fields: [
        {
            name: 'AC',
            value: '15',
            inline: true,
        },
        {
            name: 'Iniciative',
            value: '+4',
            inline: true,
        },
        {
            name: 'HP',
            value: '19',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: '+2',
            inline: true,
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: SephFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: SephDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: SephCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: SephInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: SephSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: SephCar,
            inline: true,
        },
        {
            name: 'Martelo',
            value: '+1 1d4+4',
        },
        {
            name: 'Trompete',
            value: '+2 1d10+4',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.StatSeph = {
    color: 0xFF0099,
    title: 'Seph, the one who sings',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Seph',
    },
    description: 'Resistance stats',
    thumbnail: {
        url: 'https://external-preview.redd.it/SZUEgrVG2kzDNZ1AjZ5Sj09USRyMe0OahJ-L0KKCvJ8.jpg?s=5ce115c504bb597b0bdccf1b44ac66ec2ad0f0b3',
    },
    fields: [
        {
            name: 'Força',
            value: '+0',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+0',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+1',
            inline: true,
        },
        {
            name: '*Inteligencia',
            value: '+5',
            inline: true,
        },
        {
            name: '*Sabedoria',
            value: '+5',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+2',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: '+3',
            inline: true,
        },
        {
            name: 'Atletismo',
            value: '+0',
            inline: true,
        },
        {
            name: 'Atuação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Blefar',
            value: '+3',
            inline: true,
        },
        {
            name: 'Furtividade',
            value: '+0',
            inline: true,
        },
        {
            name: 'Historia',
            value: '+3',
            inline: true,
        },
        {
            name: 'Intimidação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Intuição',
            value: '+5',
            inline: true,
        },
        {
            name: 'Investigação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: '+3',
            inline: true,
        },
        {
            name: 'Medicina',
            value: '+3',
            inline: true,
        },
        {
            name: 'Natureza',
            value: '+5',
            inline: true,
        },
        {
            name: 'Percepção',
            value: '+3',
            inline: true,
        },
        {
            name: 'Persuasão',
            value: '+3',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: '+0',
            inline: true,
        },
        {
            name: 'Religião',
            value: '+3',
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: '+3',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.SpellSeph = {
    color: 0xFF0099,
    title: 'Seph, the one who sings',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Seph',
    },
    description: 'Spell list',
    thumbnail: {
        url: 'https://external-preview.redd.it/SZUEgrVG2kzDNZ1AjZ5Sj09USRyMe0OahJ-L0KKCvJ8.jpg?s=5ce115c504bb597b0bdccf1b44ac66ec2ad0f0b3',
    },
    fields: [
        {
            name: 'Slots',
            value: '4 magia lvl 1 e 3 lvl 2',
            inline: true,
        },        
        {
            name: 'Inspiração (açao extra)',
            value: '1d6 para um aliado em testes de ataque, resistencia ou atributo',
            inline: true,
        },
        {
            name: 'Pau pra toda obra (passiva)',
            value: 'Soma proficiencia/2 nos atributos',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: 'Cria uma ilusão palpavel (acende ou apaga velas, suja objetos, muda o gosto)',
            inline: true,
        },
        {
            name: 'Ilusão menor',
            value: 'Você cria um som ou uma imagem de um objeto, dentro do alcance, que permanece pela duração. A ilusão também termina se você dissipa-la usando uma ação ou conjurar essa magia novamente.',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Perdição',
            value: 'A criatura deve realizar um CD Carisma. Sempre que um alvo que falhou nessa resistência realizar uma jogada de ataque ou um teste de resistência antes da magia acabar, o alvo deve rolar um d4 e subtrair o valor rolado da jogada de ataque ou teste de resistência.',
        },
        {
            name: 'Sono',
            value: 'Essa magia põem as criaturas num entorpecimento mágico. Jogue 5d8; o total é a quantidade de pontos de vida de criaturas afetados pela magia.',
        },
        {
            name: 'Fogo ferreo',
            value: 'Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto não recebe benefício por estar invisível.',
        },
        {
            name: 'Sussuros',
            value: ' O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele sofrerá 3d6 de dano psíquico e deve, imediatamente, usar sua reação, se disponível, para se mover para o mais longe possível de você. ',
        },
        {
            name: 'Detectar pensamento',
            value: 'Se a criatura escolhida possuir Inteligência 3 ou inferior ou não falar nenhum tipo de idioma, a criatura não poderá ser afetada.',
        },   
        {
            name: 'Invisibilidade',
            value: 'Uma criatura que você tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invisível enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia.',
        },              
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.Max = {
    color: 0x0099ff,
    title: 'Max, the grumpy',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Max',
    },
    description: 'Elfo Mago (Necromantico), level ' + level.toString(),
    thumbnail: {
        url: 'https://unshavedmouse.files.wordpress.com/2014/01/gandalf.jpg?w=300&h=218',
    },
    fields: [
        {
            name: 'AC',
            value: '13',
            inline: true,
        },
        {
            name: 'Iniciative',
            value: '+3',
            inline: true,
        },
        {
            name: 'HP',
            value: '20',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: '+2',
            inline: true,
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: '-1',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+3',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+3',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+4',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '+2',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+1',
            inline: true,
        },
        {
            name: 'Adaga',
            value: '+1 1d4+3',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Minor spell reflection 1x day',
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.StatMax = {
    color: 0x0099ff,
    title: 'Max, the grumpy',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Max',
    },
    description: 'Elfo Mago, level ' + level.toString(),
    thumbnail: {
        url: 'https://unshavedmouse.files.wordpress.com/2014/01/gandalf.jpg?w=300&h=218',
    },
    fields: [
        {
            name: 'Força',
            value: '-1',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+3',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+3',
            inline: true,
        },
        {
            name: '*Inteligencia',
            value: '+6',
            inline: true,
        },
        {
            name: '*Sabedoria',
            value: '+4',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+1',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: '+3',
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: '+6',
            inline: true,
        },
        {
            name: 'Atletismo',
            value: '-1',
            inline: true,
        },
        {
            name: 'Atuação',
            value: '+1',
            inline: true,
        },
        {
            name: 'Blefar',
            value: '+1',
            inline: true,
        },
        {
            name: 'Furtividade',
            value: '+3',
            inline: true,
        },
        {
            name: 'Historia',
            value: '+6',
            inline: true,
        },
        {
            name: 'Intimidação',
            value: '+1',
            inline: true,
        },
        {
            name: 'Intuição',
            value: '+2',
            inline: true,
        },
        {
            name: 'Investigação',
            value: '+4',
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: '+2',
            inline: true,
        },
        {
            name: 'Medicina',
            value: '+2',
            inline: true,
        },
        {
            name: 'Natureza',
            value: '+4',
            inline: true,
        },
        {
            name: 'Percepção',
            value: '+2',
            inline: true,
        },
        {
            name: 'Persuasão',
            value: '+1',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Religião',
            value: '+4',
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: '+2',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.SpellMax = {
    color: 0x0099ff,
    title: 'Max, the grumpy',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Spell information for Max',
    },
    description: 'Elfo Mago, level ' + level.toString(),
    thumbnail: {
        url: 'https://unshavedmouse.files.wordpress.com/2014/01/gandalf.jpg?w=300&h=218',
    },
    fields: [
        {
            name: 'Slots',
            value: '4 magia lvl 1 e 3 lvl 2',
        },        
        {
            name: 'Seta de fogo',
            value: 'Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de fogo.',
            inline: true,
        },
        {
            name: 'Raio de gelo',
            value: 'Realize um ataque à distância com magia contra o alvo. Se atingir, ele sofre 1d8 de dano de frio',
            inline: true,
        },
        {
            name: 'Mãos mágicas',
            value: 'Uma mão espectral flutuante aparece num ponto, à sua escolha, dentro do alcance. A mão permanece pela duração ou até você dissipa-la com uma ação.',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Armadura arcana',
            value: 'Você toca uma criatura voluntária que não esteja vestindo armadura e uma energia mágica protetora a envolve até a magia acabar. A CA base do alvo se torna 13 + o modificador de Destreza dele.',
        },
        {
            name: 'Mãos flamejantes',
            value: 'Teste de resistência de Destreza. Uma criatura sofre 3d6 de dano de fogo se falhar no teste, ou metade desse dano se obtiver sucesso.',
        },
        {
            name: 'Disfarçar-se',
            value: 'Você faz com que você mesmo – incluindo suas roupas, armadura, armas e outros pertences no seu personagem – pareça diferente até a magia acabar ou até você usar sua ação para dispensa-la.',
        },
        {
            name: 'Detectar magia',
            value: 'Pela duração, você sente a presença de magia a até 9 metros de você.',
        },
        {
            name: 'Enfeitiçar',
            value: 'A criatura enfeitiçada reconhece você como um conhecido amigável. Quando a magia acabar, a criatura saberá que foi enfeitiçada por você.',
        },
        {
            name: 'Alterar-se n2',
            value: 'Você assume uma forma diferente: Adaptação Aquática, Mudar Aparência, Armas Naturais (1d6 de dano +2)',
        },   
        {
            name: 'Necromancia',
            value: 'Um vez por turno ao matar uma ou mais criatura com uma magia de 1o nível ou maior, você recupera pontos de vida igual a duas vezes o nível da magia ou três vezes se a magia pertencer a Escola da Necromancia.',
        },              
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.Sauer = {
    color: 0xFF0000,
    title: 'Sauer, the bald',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Sauer',
    },
    description: 'Anao Guerreiro, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: 'AC',
            value: '16',
            inline: true,
        },
        {
            name: 'Iniciative',
            value: '+2',
            inline: true,
        },
        {
            name: 'HP',
            value: '32',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: '+2',
            inline: true,
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: '+2',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+2',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+5',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '+0',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+1',
            inline: true,
        },
        {
            name: 'Machado',
            value: '+4 1d8+2',
        },
        {
            name: 'Pa',
            value: '+2 1d10+2 (Mold earth 3x day)',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Critical with 19 or 20',
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};



exports.StatSauer = {
    color: 0xFF0000,
    title: 'Sauer, the bald',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Sauer',
    },
    description: 'Anao Guerreiro, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: 'Força',
            value: '+4',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+2',
            inline: true,
        },
        {
            name: '*Constituição',
            value: '+7',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '+0',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+1',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: '+2',
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: '+0',
            inline: true,
        },
        {
            name: 'Atletismo',
            value: '+4',
            inline: true,
        },
        {
            name: 'Atuação',
            value: '+1',
            inline: true,
        },
        {
            name: 'Blefar',
            value: '+1',
            inline: true,
        },
        {
            name: 'Furtividade',
            value: '+2',
            inline: true,
        },
        {
            name: 'Historia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Intimidação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Intuição',
            value: '+0',
            inline: true,
        },
        {
            name: 'Investigação',
            value: '+0',
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: '+0',
            inline: true,
        },
        {
            name: 'Medicina',
            value: '+0',
            inline: true,
        },
        {
            name: 'Natureza',
            value: '+0',
            inline: true,
        },
        {
            name: 'Percepção',
            value: '+0',
            inline: true,
        },
        {
            name: 'Persuasão',
            value: '+1',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: '+2',
            inline: true,
        },
        {
            name: 'Religião',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: '+0',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.SpellSauer = {
    color: 0xFF0000,
    title: 'Sauer, the bald',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Sauer',
    },
    description: 'Anao Guerreiro, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: 'Retomar folego',
            value: '1d10 + lvl para recuperar vida (1x dia)',
            inline: true,
        },
        {
            name: 'Proteção',
            value: 'Quando uma criatura que você possa ver atacar um alvo, impoe desvantagens nos ataques.',
            inline: true,
        },
        {
            name: 'Ação extra',
            value: '1x ao dia',
            inline: true,
        },        
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.Djohn = {
    color: 0x00FF00,
    title: 'Djohnson, the shivering',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Djohnson',
    },
    description: 'Draconato barbaro, level ' + level.toString(),
    thumbnail: {
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9686ff89-c3f0-4a86-b227-b169b672a761/d3f17mn-fb1acac6-94c3-4b3e-98db-42e326279487.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85Njg2ZmY4OS1jM2YwLTRhODYtYjIyNy1iMTY5YjY3MmE3NjEvZDNmMTdtbi1mYjFhY2FjNi05NGMzLTRiM2UtOThkYi00MmUzMjYyNzk0ODcuanBnIn1dXX0.3J7FR8rm2DksjUhWNm5cddmHKZ0vSO7gFxOI_i4o_Q0',
    },
    fields: [
        {
            name: 'AC',
            value: '16',
            inline: true,
        },
        {
            name: 'Iniciative',
            value: '+1',
            inline: true,
        },
        {
            name: 'HP',
            value: '24',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: '+2',
            inline: true,
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: '+5',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+1',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+1',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '-1',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+1',
            inline: true,
        },
        {
            name: 'Espada',
            value: '+6 2d6+5',
        },
        {
            name: 'Sopro de fogo',
            value: '2d6 (1x day)',
        },
        {
            name: 'Furia',
            value: '3x dia +2 de dano vantgem em testes',
        },        
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.StatDjohn = {
    color: 0x00FF00,
    title: 'Djohnson, the shivering',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Djohnson',
    },
    description: 'Draconato barbaro, level ' + level.toString(),
    thumbnail: {
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9686ff89-c3f0-4a86-b227-b169b672a761/d3f17mn-fb1acac6-94c3-4b3e-98db-42e326279487.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85Njg2ZmY4OS1jM2YwLTRhODYtYjIyNy1iMTY5YjY3MmE3NjEvZDNmMTdtbi1mYjFhY2FjNi05NGMzLTRiM2UtOThkYi00MmUzMjYyNzk0ODcuanBnIn1dXX0.3J7FR8rm2DksjUhWNm5cddmHKZ0vSO7gFxOI_i4o_Q0',
    },
    fields: [
        {
            name: '*Força',
            value: '+7',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+1',
            inline: true,
        },
        {
            name: '*Constituição',
            value: '+3',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '+3',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+5',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: '+3',
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: '+0',
            inline: true,
        },
        {
            name: 'Atletismo',
            value: '+5',
            inline: true,
        },
        {
            name: 'Atuação',
            value: '+1',
            inline: true,
        },
        {
            name: 'Blefar',
            value: '+1',
            inline: true,
        },
        {
            name: 'Furtividade',
            value: '+1',
            inline: true,
        },
        {
            name: 'Historia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Intimidação',
            value: '+2',
            inline: true,
        },
        {
            name: 'Intuição',
            value: '-1',
            inline: true,
        },
        {
            name: 'Investigação',
            value: '+0',
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: '-1',
            inline: true,
        },
        {
            name: 'Medicina',
            value: '+0',
            inline: true,
        },
        {
            name: 'Natureza',
            value: '+0',
            inline: true,
        },
        {
            name: 'Percepção',
            value: '-1',
            inline: true,
        },
        {
            name: 'Persuasão',
            value: '+1',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: '+1',
            inline: true,
        },
        {
            name: 'Religião',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: '-1',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.SpellDjohn = {
    color: 0x00FF00,
    title: 'Djohnson, the shivering',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Spell information for Djohnson',
    },
    description: 'Draconato barbaro, level ' + level.toString(),
    thumbnail: {
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9686ff89-c3f0-4a86-b227-b169b672a761/d3f17mn-fb1acac6-94c3-4b3e-98db-42e326279487.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85Njg2ZmY4OS1jM2YwLTRhODYtYjIyNy1iMTY5YjY3MmE3NjEvZDNmMTdtbi1mYjFhY2FjNi05NGMzLTRiM2UtOThkYi00MmUzMjYyNzk0ODcuanBnIn1dXX0.3J7FR8rm2DksjUhWNm5cddmHKZ0vSO7gFxOI_i4o_Q0',
    },
    fields: [
        {
            name: 'Falar com animais 🐑',
            value: 'Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração.',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Sentido animal',
            value: 'Através de um ritual escolha um dos animais a seguir:',
            inline: true,
        },
        {
            name: 'Urso',
            value: 'Quando em fúria fica resistente a todos os tipos de dano, exceto psíquico.',
            inline: true,
        },
        {
            name: 'Aguia',
            value: 'Quando em fúria e sem usar armadura pesada, criaturas tem desvantagem em ataques de oportunidade contra você e você pode usar ação corrida como ação bônus.',
            inline: true,
        },     
        {
            name: 'Lobo',
            value: 'Quando em fúria, seus aliados têm vantagem em ataque corpo a corpo contra criaturas inimigas a 1,5 m de você.',
            inline: true,
        },            
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};



exports.Ixpexi = {
    color: 0xFF0000,
    title: 'Ixpexi, the missing one',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Ixpexi',
    },
    description: 'Humano Paladino, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: 'AC',
            value: '16',
            inline: true,
        },
        {
            name: 'Iniciative',
            value: '+1',
            inline: true,
        },
        {
            name: 'HP',
            value: '32',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: '+2',
            inline: true,
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: '+4',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+1',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+1',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '+1',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '+3',
            inline: true,
        },
        {
            name: 'Machado',
            value: '+4 1d8+2',
        },
        {
            name: 'Pa',
            value: '+2 1d10+2 (Mold earth 3x day)',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Critical with 19 or 20',
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};



exports.StatIxpexi = {
    color: 0xFF0000,
    title: 'Ixpexi, the missing one',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Ixpexi',
    },
    description: 'Humano Paladino, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: 'Força',
            value: '+4',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '+1',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+1',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+0',
            inline: true,
        },
        {
            name: '*Sabedoria',
            value: '+3',
            inline: true,
        },
        {
            name: '*Carisma',
            value: '+5',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: '+2',
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: '+0',
            inline: true,
        },
        {
            name: 'Atletismo',
            value: '+4',
            inline: true,
        },
        {
            name: 'Atuação',
            value: '+1',
            inline: true,
        },
        {
            name: 'Blefar',
            value: '+1',
            inline: true,
        },
        {
            name: 'Furtividade',
            value: '+2',
            inline: true,
        },
        {
            name: 'Historia',
            value: '+0',
            inline: true,
        },
        {
            name: 'Intimidação',
            value: '+3',
            inline: true,
        },
        {
            name: 'Intuição',
            value: '+0',
            inline: true,
        },
        {
            name: 'Investigação',
            value: '+0',
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: '+0',
            inline: true,
        },
        {
            name: 'Medicina',
            value: '+0',
            inline: true,
        },
        {
            name: 'Natureza',
            value: '+0',
            inline: true,
        },
        {
            name: 'Percepção',
            value: '+0',
            inline: true,
        },
        {
            name: 'Persuasão',
            value: '+1',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: '+2',
            inline: true,
        },
        {
            name: 'Religião',
            value: '+0',
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: '+0',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.SpellIxpexi = {
    color: 0xFF0000,
    title: 'Sauer, the bald',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Sauer',
    },
    description: 'Anao Guerreiro, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: 'Slots',
            value: '3 magia lvl 1',
        },         
        {
            name: 'Retomar folego',
            value: '1d10 + lvl para recuperar vida (1x dia)',
            inline: true,
        },
        {
            name: 'Proteção',
            value: 'Quando uma criatura que você possa ver atacar um alvo, impoe desvantagens nos ataques.',
            inline: true,
        },
        {
            name: 'Ação extra',
            value: '1x ao dia',
            inline: true,
        },        
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};


exports.Randal = {
    color: 0xFF0000,
    title: 'Randal, the deserter',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Randal',
    },
    description: 'Humano guerreiro, level 4',
    fields: [
        {
            name: 'AC',
            value: '17',
            inline: true,
        },
        {
            name: 'Iniciative',
            value: '-1',
            inline: true,
        },
        {
            name: 'HP',
            value: '27',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: '+3',
            inline: true,
        },
        {
            name: 'Destreza',
            value: '-1',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+0',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+3',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: '+1',
            inline: true,
        },
        {
            name: 'Carisma',
            value: '-2',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Espada longa',
            value: '+5 1d8/1d10',
        },
        {
            name: 'Espada curta',
            value: '+5 1d4',
        },
        {
            name: 'Besta leve',
            value: '-2 1d6',
        },
        {
            name: 'Adaga',
            value: '+5 1d4+3',
        },
        {
            name: 'Espada larga',
            value: '+5 2d6+3',
        },
    ],
    image: {
        url: 'https://gamepedia.cursecdn.com/wowpedia/d/da/Varian_cinematic.jpg',
    },
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};