const updated = 'Updated for 6 session';
const level = 7;

const MordaiFor = '+0'; //20
const MordaiDes = '+2'; //12
const MordaiCon = '+0'; //13
const MordaiInt = '+2'; //9
const MordaiSab = '+1'; //8
const MordaiCar = '+2'; //12
const MordaiPro = '+3';

exports.Mordai = {
    color: 0xFFFF00,
    title: 'Mordai, the barman',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Mordai',
    },
    description: 'Tiefling Ladino, level ' + level.toString(),
    thumbnail: {
        url: 'https://cdnb.artstation.com/p/assets/images/images/000/303/687/micro_square/Male_TieflingRogue_Shadowdancer.jpg?1416134039',
    },
    fields: [
        {
            name: 'AC',
            value: '13',
            inline: true,
        },
        {
            name: 'Iniciativa',
            value: MordaiDes,
            inline: true,
        },
        {
            name: 'HP',
            value: '28',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: MordaiPro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: MordaiFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: MordaiDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: MordaiCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: MordaiInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: MordaiSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: MordaiCar,
            inline: true,
        },
        {
            name: 'Adaga',
            value: MordaiPro + ' 1d4',
        },
        {
            name: 'Arco Curto',
            value: MordaiPro + ' 1d5',
        },
        {
            name: 'Rapieira',
            value: MordaiPro + ' 1d8',
        },        
        {
            name: 'Ataque',
            value: MordaiPro + MordaiDes,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Resistencia a fogo',
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.StatMordai = {
    color: 0xFFFF00,
    title: 'Mordai, the Barman',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Resistance stats for Mordai',
    },
    description: 'Testes de resistencia',
    thumbnail: {
        url: 'https://cdnb.artstation.com/p/assets/images/images/000/303/687/micro_square/Male_TieflingRogue_Shadowdancer.jpg?1416134039',
    },
    fields: [
        {
            name: 'Força',
            value: MordaiFor,
            inline: true,
        },
        {
            name: '•Destreza',
            value: '+5',
            inline: true,
        },
        {
            name: 'Constituição',
            value: MordaiCon,
            inline: true,
        },
        {
            name: '•Inteligencia',
            value: '+5',
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: MordaiSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: MordaiCar,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: '•Acrobacia',
            value: '+5',
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: '+2',
            inline: true,
        },
        {
            name: 'Atletismo',
            value: '+0',
            inline: true,
        },
        {
            name: 'Atuação',
            value: '+2',
            inline: true,
        },
        {
            name: '•Blefar',
            value: '+5',
            inline: true,
        },
        {
            name: '•Furtividade',
            value: '+8',
            inline: true,
        },
        {
            name: 'Historia',
            value: '+2',
            inline: true,
        },
        {
            name: 'Intimidação',
            value: MordaiCar,
            inline: true,
        },
        {
            name: 'Intuição',
            value: '+4',
            inline: true,
        },
        {
            name: 'Investigação',
            value: MordaiInt,
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: MordaiSab,
            inline: true,
        },
        {
            name: 'Medicina',
            value: MordaiSab,
            inline: true,
        },
        {
            name: 'Natureza',
            value: MordaiInt,
            inline: true,
        },
        {
            name: 'Percepção',
            value: '+4',
            inline: true,
        },
        {
            name: 'Persuasão',
            value: '+5',
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: MordaiDes,
            inline: true,
        },
        {
            name: 'Religião',
            value: MordaiInt,
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: MordaiSab,
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.SpellMordai = {
    color: 0xFF9900,
    title: 'Mordai Talaviel, the Barman',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Spells for Mordai',
    },
    description: 'Spells list',
    thumbnail: {
        url: 'https://cdnb.artstation.com/p/assets/images/images/000/303/687/micro_square/Male_TieflingRogue_Shadowdancer.jpg?1416134039',
    },
    fields: [
        {
            name: 'Slots',
            value: '4 magias lvl 1 + 3 magia lvl 2 + 3 magia lvl 3',
        },
        {
            name: 'Acao Astuta',
            value: 'Pode usar uma acao bonus no seu turno para Correr, Desengajar ou Esconder-se',
        },
        {
            name: 'Repreensao Infernal',
            value: 'Reação que aponta o dedo e a criatura que causou dano é envolta por chamas infernais. A criatura realiza um teste de resistencia de Des e sofre 2d10 de dano de fogo se falhar na resistência ou metade se passar.',
        },
        {
            name: 'Esquiva Sobrenatural',
            value: 'Quando um inimigo que você possa ver lhe acertar um ataque, pode usar sua reação para reduzir o dano sofrido pela metade',
        },       
        {
            name: 'Evasão',
            value: 'Quando for alvo de um efeito que exija um teste de resistência de Destreza para sofrer metade do dano, não sofre dano se passar e somente metade se falhar.',
        },         
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Ataque Furtivo',
            value: 'Uma vez por turno, quando acertar alguém que tenha vantagem no ataque pode adicionar o dano do ataque furtivo (4d6)',
        },
        {
            name: 'Assassino',
            value: 'Tem vantagem em ataques contra criaturas que não tiveram seu turno no combate ainda. Além disso, qualquer acerto contra uma criatura surpresa é um acerto crítico.',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};
