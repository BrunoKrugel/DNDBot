const updated = 'Updated for 6 session';
const level = 7;

const SauerFor = '+2'; //8
const SauerDes = '+2'; //18
const SauerCon = '+5'; //14
const SauerInt = '+0'; //13
const SauerSab = '+0'; //13
const SauerCar = '+1'; //16
const SauerPro = '+3';

exports.Ficha = {
    color: 0xFF0000,
    title: 'Sauer, the bald',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Sauer',
    },
    description: 'Anao Guerreiro Campeão, level ' + level.toString(),
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
            name: 'Iniciativa',
            value: SauerDes,
            inline: true,
        },
        {
            name: 'HP',
            value: '57',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: SauerPro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: SauerFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: SauerDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: SauerCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: SauerInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: SauerSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: SauerCar,
            inline: true,
        },
        {
            name: 'Machado',
            value: SauerPro + SauerFor + ' 1d8 ' + SauerFor,
        },
        {
            name: 'Thornblight',
            value: SauerPro + SauerFor + ' 1d6 ' + SauerFor + ' (Cons DC 17 3 Dano 3 turnos)',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Critical with 19 or 20',
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};



exports.Status = {
    color: 0xFF0000,
    title: 'Sauer, the bald',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Sauer',
    },
    description: 'Anao Guerreiro Campeão, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: '•Força',
            value: SauerFor + SauerPro,
            inline: true,
        },
        {
            name: 'Destreza',
            value: SauerDes,
            inline: true,
        },
        {
            name: '•Constituição',
            value: SauerCon + SauerPro,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: SauerInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: SauerSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: SauerCar,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: SauerDes,
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: SauerInt,
            inline: true,
        },
        {
            name: '•Atletismo',
            value: SauerFor + SauerPro,
            inline: true,
        },
        {
            name: 'Atuação',
            value: SauerCar,
            inline: true,
        },
        {
            name: 'Blefar',
            value: SauerCar,
            inline: true,
        },
        {
            name: 'Furtividade',
            value: SauerDes,
            inline: true,
        },
        {
            name: 'Historia',
            value: SauerInt,
            inline: true,
        },
        {
            name: '•Intimidação',
            value: SauerCar + SauerPro,
            inline: true,
        },
        {
            name: 'Intuição',
            value: SauerSab,
            inline: true,
        },
        {
            name: 'Investigação',
            value: SauerInt,
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: SauerSab,
            inline: true,
        },
        {
            name: 'Medicina',
            value: SauerSab,
            inline: true,
        },
        {
            name: 'Natureza',
            value: SauerInt,
            inline: true,
        },
        {
            name: 'Percepção',
            value: SauerSab,
            inline: true,
        },
        {
            name: 'Persuasão',
            value: SauerCar,
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: SauerDes,
            inline: true,
        },
        {
            name: 'Religião',
            value: SauerInt,
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: SauerSab,
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.Spell = {
    color: 0xFF0000,
    title: 'Sauer, the bald',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Sauer',
    },
    description: 'Anao Guerreiro Campeão, level ' + level.toString(),
    thumbnail: {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j2knNDoG4XFq0Ovk7zoIPgHaKl%26pid%3DApi&f=1',
    },
    fields: [
        {
            name: 'Ataque extra',
            value: 'Quando usar ação Atacar, pode atacar duas vezes.',
            inline: true,
        },        
        {
            name: 'Retomar folego',
            value: '1d10 + ' + level.toString() + 'para recuperar vida (1x dia)',
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
        {
            name: 'Critico Aprimorado',
            value: 'Seus ataques com arma tem critico com 19 e 20',
            inline: true,
        },
        {
            name: 'Atleta Renomado',
            value: 'Adiciona metade do bonus de proficiencia para qualquer teste de Força, Dextreza ou Constituição.',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};
