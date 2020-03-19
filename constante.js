const updated = 'Updated for 3 session';
const level = 3;

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
            value: '11',
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
            value: '15',
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
            value: '+4',
            inline: true,
        },
        {
            name: 'Constituição',
            value: '+2',
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: '+1',
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
    description: 'Elfo Mago, level ' + level.toString(),
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
            value: '16',
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
            name: 'Enfeitiçar',
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
            value: '26',
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
        text: updated.toString(),
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