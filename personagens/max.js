const updated = 'Updated for 6 session';
const level = 7;

const MaxFor = '-1'; //8
const MaxDes = '+3'; //17
const MaxCon = '+3'; //16
const MaxInt = '+4'; //18
const MaxSab = '+2'; //15
const MaxCar = '+1'; //13
const MaxPro = '+3';

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
            name: 'Iniciativa',
            value: MaxDes,
            inline: true,
        },
        {
            name: 'HP',
            value: '37',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: MaxPro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: MaxFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: MaxDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: MaxCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: MaxInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: MaxSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: MaxCar,
            inline: true,
        },
        {
            name: 'Adaga',
            value: MaxDes + MaxPro + '1d4' + MaxDes,
            inline: true,
        },
        {
            name: 'Magia',
            value: MaxInt + MaxPro,
        }
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
            value: MaxFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: MaxDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: MaxCon,
            inline: true,
        },
        {
            name: '•Inteligencia',
            value: MaxInt + MaxPro,
            inline: true,
        },
        {
            name: '•Sabedoria',
            value: MaxSab + MaxPro,
            inline: true,
        },
        {
            name: 'Carisma',
            value: MaxCar,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: MaxDes,
            inline: true,
        },
        {
            name: '•Arcanismo',
            value: MaxInt,
            inline: true,
        },
        {
            name: 'Atletismo',
            value: MaxFor,
            inline: true,
        },
        {
            name: 'Atuação',
            value: MaxCar,
            inline: true,
        },
        {
            name: 'Blefar',
            value: MaxCar,
            inline: true,
        },
        {
            name: 'Furtividade',
            value: MaxDes,
            inline: true,
        },
        {
            name: '•Historia',
            value: MaxInt + MaxPro,
            inline: true,
        },
        {
            name: 'Intimidação',
            value: MaxCar,
            inline: true,
        },
        {
            name: 'Intuição',
            value: MaxSab,
            inline: true,
        },
        {
            name: 'Investigação',
            value: MaxInt,
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: MaxSab,
            inline: true,
        },
        {
            name: 'Medicina',
            value: MaxSab,
            inline: true,
        },
        {
            name: 'Natureza',
            value: MaxInt,
            inline: true,
        },
        {
            name: '•Percepção',
            value: MaxSab + MaxPro,
            inline: true,
        },
        {
            name: 'Persuasão',
            value: MaxCar,
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: MaxCar,
            inline: true,
        },
        {
            name: 'Religião',
            value: MaxInt,
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: MaxSab,
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
            value: '4 lv1 + 3 lv2 + 3 lv3 + 1 lv4',
        },
        {
            name: 'Colheita Macabra',
            value: 'Uma vez por turno ao matar uma criatura, recupera HP igual a 3x o nivel da magia',
            inline: false,
        },
        {
            name: 'Vassalos mortos vivos',
            value: 'Ao animar um corpo, pode ter dois corpos como alvo, invocando dois zumbis.',
            inline: false,
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
            name: 'Armadura arcana n1',
            value: 'Você toca uma criatura voluntária que não esteja vestindo armadura e uma energia mágica protetora a envolve até a magia acabar. A CA base do alvo se torna 13 + o modificador de Destreza dele.',
        },
        {
            name: 'Mãos flamejantes n1',
            value: 'Teste de resistência de Destreza. Uma criatura sofre 3d6 de dano de fogo se falhar no teste, ou metade desse dano se obtiver sucesso.',
        },
        {
            name: 'Disfarçar-se n1',
            value: 'Você faz com que você mesmo – incluindo suas roupas, armadura, armas e outros pertences no seu personagem – pareça diferente até a magia acabar ou até você usar sua ação para dispensa-la.',
        },
        {
            name: 'Enfeitiçar Pessoa n1',
            value: 'A criatura enfeitiçada reconhece você como um conhecido amigável. Quando a magia acabar, a criatura saberá que foi enfeitiçada por você.',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },        
        {
            name: 'Alterar-se n2',
            value: 'Você assume uma forma diferente: Adaptação Aquática, Mudar Aparência, Armas Naturais (1d6 de dano +2)',
        },
        {
            name: 'Coroa da loucura n2',
            value: 'Seu alvo humanóide deve ser passar em teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração, e pode realizar um ataque corpo-a-corpo contra uma criatura, diferente de si mesma, que você escolher mentalmente, o alvo pode realizar um teste de resistência de Sabedoria no final de cada um dos turnos dele. Se obtiver sucesso, a magia termina.',
        },
        {
            name: 'Despedaçar n2',
            value: 'Um alto som estridente, cada criatura deve fazer um teste de resistência de Constituição, e sofre 3d8 de dano trovejante se falhar na resistência ou metade desse dano se obtiver sucesso. ',
        },                
        {
            name: 'Animar os mortos n3',
            value: 'Escolha uma pilha de ossos ou corpo de um humanoide do alcance, erguendo-o como uma criatura morta-viva. O alvo se torna um esqueleto, se você escolheu ossos, ou um zumbi, se você escolheu um corpo',
        },
        {
            name: 'Bola de fogo n3',
            value: 'Cada criatura deve realizar um teste de resistência de Destreza e sofre 8d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso.',
        }, 
        {
            name: 'Forjar Morte n3',
            value: 'Você toca uma criatura voluntária e a coloca em um estado catatônico que é indistinguível da morte.',
        },  
        {
            name: 'Muralha de fogo n4',
            value: 'Invoca uma muralha e cada criatura dentro dentro dela deve fazer um teste de resistência de Destreza. Se falhar, sofre 5d8 de dano, ou metade desse dano se passar. Um lado da muralha, escolhido no momento da conjuração da magia, causa 5d8 de dano de fogo a cada criatura que terminar o turno dela a até 3 metros desse lado ou dentro da muralha. Uma criatura sofre o mesmo dano quando entra na muralha pela primeira vez num turno ou termina seu turno nela. O outro lado da muralha não causa dano algum.',
        },                        
    ],
    timestamp: new Date(),
    footer: {
        text: updated.toString(),
        icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
    },
};