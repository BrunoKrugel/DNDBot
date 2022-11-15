const updated = 'Updated for 6 session';
const level = 7;

const BruceFor = '+0'; //10
const BruceDes = '+0'; //11
const BruceCon = '+1'; //12
const BruceInt = '+3'; //16
const BruceSab = '+3'; //16
const BruceCar = '+3'; //16
const BrucePro = '+3';

exports.Ficha = {
    color: 0xFF9900,
    title: 'Bruce, the drunk',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Status information for Bruce',
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
            name: 'Iniciativa',
            value: BruceDes,
            inline: true,
        },
        {
            name: 'HP',
            value: '41',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: BrucePro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: BruceFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: BruceDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: BruceCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: BruceInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: BruceSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: BruceCar,
            inline: true,
        },
        {
            name: 'Adaga',
            value: BrucePro + BruceDes + ' 1d4' + BruceDes,
        },
        {
            name: 'Open bar',
            value: BrucePro + BruceFor + ' 1d10 +1d6 (if drunk)',
        },
        {
            name: 'Magia',
            value: BrucePro + BruceSab,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Vantagem contra enfeitiçamento e magias de sono',
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};

exports.Status = {
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
            value: BruceFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: BruceDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: BruceCon,
            inline: true,
        },
        {
            name: '•Inteligencia',
            value: BruceInt + BrucePro,
            inline: true,
        },
        {
            name: '•Sabedoria',
            value: BruceSab + BrucePro,
            inline: true,
        },
        {
            name: 'Carisma',
            value: BruceCar,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: BruceDes,
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: BruceInt,
            inline: true,
        },
        {
            name: 'Atletismo',
            value: BruceFor,
            inline: true,
        },
        {
            name: 'Atuação',
            value: BruceCar,
            inline: true,
        },
        {
            name: 'Blefar',
            value: BruceCar,
            inline: true,
        },
        {
            name: 'Furtividade',
            value: BruceDes,
            inline: true,
        },
        {
            name: 'Historia',
            value: BruceInt,
            inline: true,
        },
        {
            name: 'Intimidação',
            value: BruceCar,
            inline: true,
        },
        {
            name: '•Intuição',
            value: BruceSab + BrucePro,
            inline: true,
        },
        {
            name: '•Investigação',
            value: BruceInt + BrucePro,
            inline: true,
        },
        {
            name: '•Lidar com animais',
            value: BruceSab + BrucePro,
            inline: true,
        },
        {
            name: 'Medicina',
            value: BruceSab,
            inline: true,
        },
        {
            name: '•Natureza',
            value: BruceInt + BrucePro,
            inline: true,
        },
        {
            name: 'Percepção',
            value: BruceSab,
            inline: true,
        },
        {
            name: 'Persuasão',
            value: BruceCar,
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: BruceDes,
            inline: true,
        },
        {
            name: 'Religião',
            value: BruceInt,
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: BruceSab,
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
            value: '4 lv1 + 4 lv2 + 4 lv3 + 1 lv4',
        },
        {
            name: 'Criar chamas',
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
            name: 'Curar ferimento n1',
            value: 'Uma criatura que você tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração.',
        },
        {
            name: 'Falar com animais n1',
            value: 'Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração.',
        },
        {
            name: 'Onda trovejante n1',
            value: 'Cada criatura deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 2d8 de dano trovejante e será empurrada. Se obtive sucesso na resistência, a criatura sofrerá metade desse dano e não será empurrada.',
        },
        {
            name: 'Palavra curativa n1',
            value: 'Uma criatura, à sua escolha, que você possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração.',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Esfera flamejante n2',
            value: 'A criatura sofre 2d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso.',
        },
        {
            name: 'Raio lunar n2',
            value: 'Realizar um teste de resistência de Constituição. Ela sofre 2d10 de dano radiante se falhar na resistência ou metade desse dano se passar.',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Aprimorar Habilidade n2',
            value: 'Você toca uma criatura e a agracia com aprimoramento mágico. Escolha um dos efeitos a seguir; o alvo ganha esse efeito até o fim da magia.',
            inline: false,
        },
        {
            name: 'Agilidade do Gato',
            value: 'O alvo tem vantagem em testes de Destreza. Ele também não sofre dano ao cair de 6 metros ou menos, se não estiver incapacitado.',
            inline: true,
        },
        {
            name: 'Esperteza da Raposa',
            value: 'O alvo tem vantagem em testes de Inteligência.',
            inline: true,
        },
        {
            name: 'Esplendor da Águia',
            value: 'O alvo tem vantagem em testes de Carisma.',
            inline: true,
        },
        {
            name: 'Força do Touro',
            value: 'O alvo tem vantagem em testes de Força e sua capacidade de carga é dobrada.',
            inline: true,
        },
        {
            name: 'Sabedoria da Coruja',
            value: 'O alvo tem vantagem em testes de Sabedoria.',
            inline: true,
        },
        {
            name: 'Vigor do Urso',
            value: 'O alvo tem vantagem em testes de Constituição. Ele também recebe 2d6 pontos de vida temporários, que são perdidos quando a magia termina.',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Convocar Relâmpagos n3',
            value: 'Cada criatura deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d10 de dano elétrico se falhar no teste, ou metade desse dano se passar.',
        },
        {
            name: 'Invocar animal n3',
            value: 'Você invoca espíritos feéricos, que assumem formas de bestas, que aparecem em espaços desocupados, que você possa ver dentro do alcance',
        },
        {
            name: 'Respirar na agua n3',
            value: 'Essa magia concede a até dez criaturas voluntária que você possa ver, dentro do alcance, a habilidade de respirar embaixo d’água até a magia acabar. As criaturas afetadas também mantem sua forma normal de respiração.',
        },  
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Malogro n4',
            value: 'Energia necromântica inunda uma criatura drenando sua umidade e vitalidade. O alvo realiza teste de resistência de Concentração. O alvo sofre 8d8 de dano necrótico se falhar no teste, ou metade desse dano se obtiver sucesso.',
        },                      
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};