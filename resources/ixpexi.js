const updated = 'Updated for 6 session';
const level = 7;

const IxpexiFor = '+4'; //8
const IxpexiDes = '+1'; //18
const IxpexiCon = '+1'; //14
const IxpexiInt = '+0'; //13
const IxpexiSab = '+1'; //13
const IxpexiCar = '+3'; //16
const IxpexiPro = '+3';

exports.Ficha = {
    color: 0xFF0000,
    title: 'Ixpexi, the sharked',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Ixpexi',
    },
    description: 'Humano Paladino Defesa, level ' + level.toString(),
    thumbnail: {
        url: 'https://i.pinimg.com/originals/50/b5/fc/50b5fcadab01b9c6e5d741402f1b4c06.jpg',
    },
    fields: [
        {
            name: 'AC',
            value: '18',
            inline: true,
        },
        {
            name: 'Iniciativa',
            value: IxpexiDes,
            inline: true,
        },
        {
            name: 'HP',
            value: '42',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: IxpexiPro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: IxpexiFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: IxpexiDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: IxpexiCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: IxpexiInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: IxpexiSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: IxpexiCar,
            inline: true,
        },
        {
            name: 'Espada longa',
            value: '+6 1d8+4',
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



exports.Status = {
    color: 0xFF0000,
    title: 'Ixpexi, the sharked',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Ixpexi',
    },
    description: 'Humano Paladino Defesa, level ' + level.toString(),
    thumbnail: {
        url: 'https://i.pinimg.com/originals/50/b5/fc/50b5fcadab01b9c6e5d741402f1b4c06.jpg',
    },
    fields: [
        {
            name: 'Força',
            value: IxpexiFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: IxpexiDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: IxpexiCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: IxpexiInt,
            inline: true,
        },
        {
            name: '•Sabedoria',
            value: IxpexiSab + IxpexiPro,
            inline: true,
        },
        {
            name: '•Carisma',
            value: IxpexiCar + IxpexiPro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: IxpexiDes,
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: IxpexiInt,
            inline: true,
        },
        {
            name: 'Atletismo',
            value: IxpexiFor,
            inline: true,
        },
        {
            name: 'Atuação',
            value: IxpexiCar,
            inline: true,
        },
        {
            name: 'Blefar',
            value: IxpexiCar,
            inline: true,
        },
        {
            name: 'Furtividade',
            value: IxpexiDes,
            inline: true,
        },
        {
            name: 'Historia',
            value: IxpexiInt,
            inline: true,
        },
        {
            name: 'Intimidação',
            value: IxpexiCar,
            inline: true,
        },
        {
            name: 'Intuição',
            value: IxpexiSab,
            inline: true,
        },
        {
            name: 'Investigação',
            value: IxpexiInt,
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: IxpexiSab,
            inline: true,
        },
        {
            name: '•Medicina',
            value: IxpexiSab + IxpexiPro,
            inline: true,
        },
        {
            name: 'Natureza',
            value: IxpexiInt,
            inline: true,
        },
        {
            name: '•Percepção',
            value: IxpexiSab + IxpexiPro,
            inline: true,
        },
        {
            name: 'Persuasão',
            value: IxpexiCar,
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: IxpexiDes,
            inline: true,
        },
        {
            name: 'Religião',
            value: IxpexiInt,
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: IxpexiSab,
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
    title: 'Ixpexi, the sharked',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Ixpexi',
    },
    description: 'Humano Paladino Defesa, level ' + level.toString(),
    thumbnail: {
        url: 'https://i.pinimg.com/originals/50/b5/fc/50b5fcadab01b9c6e5d741402f1b4c06.jpg',
    },
    fields: [
        {
            name: 'Slots',
            value: '4 magia lvl 1 + 2 magia lvl 2',
        },
        {
            name: 'Cura pelas mãos',
            value: 'Pode curar vida igual seu nivel x5',
            inline: true,
        },
        {
            name: 'Sentido divino',
            value: 'Com uma ação pode detectar a localizaçao de celestial, infernal ou morto vivo',
            inline: true,
        },
        {
            name: 'Imune a doenças',
            value: 'Passivo',
            inline: true,
        },
        {
            name: 'Ataque Extra',
            value: 'Quando usar ação Atacar, pode atacar duas vezes.',
            inline: true,
        },
        {
            name: 'Aura de proteção',
            value: 'Quando você ou um aliado até 9 metros de você for fazer um teste de resistência, a criatura ganha um bônus no teste igual seu mod de Carisma.',
            inline: true,
        },        
        {
            name: 'Punição Divina',
            value: 'Quando acertar uma criatura com uma arma corpo a corpo, pode gastar um espaço de magia de paladino para causar 2d8 de dano radiante extra com magia de 1o nível. Cada nível acima do 1o adiciona 1d8, ao máximo de 5d8.',
            inline: false,
        },  
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Juramento: Raio Lunar',
            value: 'A criatura é engolfada por chamas fantasmagóricas que causam dores lancinantes e ela deve realizar um teste de resistência de Constituição. Ela sofre 2d10 de dano radiante se falhar na resistência ou metade desse dano se passar.',
            inline: false,
        },                       
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Destruição Trovejante',
            value: 'Sua arma é rodeada por trovões que são audíveis a até 90 metros e ausa 2d6 de dano trovejante extra no alvo. Além disso, se o alvo deve ser bem sucedido num teste de resistência de Força ou será empurrado 3 metros para longe.',
            inline: false,
        },
        {
            name: 'Destruição Lancinante',
            value: 'Sua arma flameja com intensas chamas brancas e o ataque causa 1d6 de dano de fogo extra ao alvo, fazendo-o incendiar pelas chamas. No início de cada turno dele, até a arma acabar, o alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 1d6 de dano de fogo. Se passar na resistência, a magia acaba',
            inline: false,
        },          
        {
            name: 'Detectar o Bem e Mal',
            value: 'Você sabe se existe uma aberração, celestial, corruptor, elemental, fada ou morto-vivo, a até 9 metros de você, assim como onde a criatura está localizada. Similarmente, você sabe se existe um local ou objeto que tenha sido consagrado ou profanado magicamente.',
            inline: false,
        },
        {
            name: 'Marca da Punição',
            value: 'O ataque causa 2d6 de dano radiante extra ao alvo, que se torna visível.',
            inline: false,
        }, 
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },    
        {
            name: 'Convocar Montaria n2',
            value: 'Quando a montaria cair a 0 pontos de vida, ela desaparece, não deixando qualquer corpo físico para trás. Você também pode dispensar sua montaria a qualquer momento, com uma ação, fazendo-a desaparecer. Em ambos os casos, conjurar essa magia novamente convocará a mesma montaria, restaurando-a ao seu máximo de pontos de vida.',
            inline: false,
        },     
        {
            name: 'Localizar Objeto n2',
            value: 'Descreva ou nomeie um objeto que seja familiar a você. Você sente a direção da localização do objeto.',
            inline: false,
        },                  
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};