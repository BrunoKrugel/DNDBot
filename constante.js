const updated = 'Updated for 6 session';
const level = 7;
//Seph
const SephFor = '-1'; //8
const SephDes = '+4'; //16 +2 (Elfo)
const SephCon = '+2'; //14
const SephInt = '+1'; //13
const SephSab = '+1'; //13
const SephCar = '+4'; //18
const SephPro = '+3';
//--------------------//
//Bruce
const BruceFor = '+0'; //10
const BruceDes = '+0'; //11
const BruceCon = '+1'; //12
const BruceInt = '+3'; //16
const BruceSab = '+3'; //16
const BruceCar = '+3'; //16
const BrucePro = '+3';
//---------------------//
//Max
const MaxFor = '-1'; //8
const MaxDes = '+3'; //17
const MaxCon = '+3'; //16
const MaxInt = '+4'; //18
const MaxSab = '+2'; //15
const MaxCar = '+1'; //13
const MaxPro = '+3';
//-------------------//
//Sauer
const SauerFor = '+2'; //8
const SauerDes = '+2'; //18
const SauerCon = '+5'; //14
const SauerInt = '+0'; //13
const SauerSab = '+0'; //13
const SauerCar = '+1'; //16
const SauerPro = '+3';
//---------------------//
//Ixpexi
const IxpexiFor = '+4'; //8
const IxpexiDes = '+1'; //18
const IxpexiCon = '+1'; //14
const IxpexiInt = '+0'; //13
const IxpexiSab = '+1'; //13
const IxpexiCar = '+3'; //16
const IxpexiPro = '+3';
//-------------------//
//Djohn
const DjohnFor = '+5'; //20
const DjohnDes = '+1'; //12
const DjohnCon = '+1'; //13
const DjohnInt = '+0'; //9
const DjohnSab = '-1'; //8
const DjohnCar = '+1'; //12
const DjohnPro = '+3';
//-------------------//
//Mordai Talaviel
const MordaiFor = '+0'; //20
const MordaiDes = '+2'; //12
const MordaiCon = '+0'; //13
const MordaiInt = '+2'; //9
const MordaiSab = '+1'; //8
const MordaiCar = '+2'; //12
const MordaiPro = '+3';

exports.Bruce = {
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
            name: 'Iniciativa',
            value: SephDes,
            inline: true,
        },
        {
            name: 'HP',
            value: '42',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: SephPro,
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
            value: SephPro + SephDes + ' 1d4' + SephFor,
        },
        {
            name: 'Trompete',
            value: SephPro + SephDes + ' 1d10' + SephDes,
        },
        {
            name: 'Magia',
            value: SephPro + SephCar,
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
    description: 'Testes de resistencia',
    thumbnail: {
        url: 'https://external-preview.redd.it/SZUEgrVG2kzDNZ1AjZ5Sj09USRyMe0OahJ-L0KKCvJ8.jpg?s=5ce115c504bb597b0bdccf1b44ac66ec2ad0f0b3',
    },
    fields: [
        {
            name: 'Força',
            value: SephFor,
            inline: true,
        },
        {
            name: '•Destreza',
            value: SephDes + SephPro,
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
            value: SephCar,
            inline: true,
        },
        {
            name: '•Carisma',
            value: SephCar + SephPro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Acrobacia',
            value: SephDes,
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: SephInt,
            inline: true,
        },
        {
            name: 'Atletismo',
            value: SephFor,
            inline: true,
        },
        {
            name: '••Atuação',
            value: SephCar + SephPro + SephPro,
            inline: true,
        },
        {
            name: 'Blefar',
            value: SephCar,
            inline: true,
        },
        {
            name: '•Furtividade',
            value: SephDes + SephPro,
            inline: true,
        },
        {
            name: 'Historia',
            value: SephInt,
            inline: true,
        },
        {
            name: 'Intimidação',
            value: SephCar,
            inline: true,
        },
        {
            name: 'Intuição',
            value: SephSab,
            inline: true,
        },
        {
            name: 'Investigação',
            value: SephInt,
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: SephSab,
            inline: true,
        },
        {
            name: 'Medicina',
            value: SephSab,
            inline: true,
        },
        {
            name: 'Natureza',
            value: SephInt,
            inline: true,
        },
        {
            name: '•Percepção',
            value: SephSab + SephPro,
            inline: true,
        },
        {
            name: '••Persuasão',
            value: SephCar + SephCar + SephPro,
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: SephDes,
            inline: true,
        },
        {
            name: 'Religião',
            value: SephInt,
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: SephSab,
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
        name: 'Spells for Seph',
    },
    description: 'Spell list',
    thumbnail: {
        url: 'https://external-preview.redd.it/SZUEgrVG2kzDNZ1AjZ5Sj09USRyMe0OahJ-L0KKCvJ8.jpg?s=5ce115c504bb597b0bdccf1b44ac66ec2ad0f0b3',
    },
    fields: [
        {
            name: 'Slots',
            value: '4 lv1 + 3 lv2 + 3 lv3 + 1 lv4',
        },
        {
            name: 'Inspiração (açao extra) (Carisma)',
            value: '1d8 para um aliado em testes de ataque, resistencia ou atributo',
            inline: true,
        },
        {
            name: 'Inspiração (combate) (Carisma)',
            value: 'O alvo pode adicionar a inspiração ao seu dano ou CA',
            inline: true,
        },        
        {
            name: 'Pau pra toda obra (passiva)',
            value: 'Soma proficiencia/2 nos atributos',
            inline: true,
        },
        {
            name: 'Desencantador',
            value: 'Começa uma atuaçao que dura ate o fim do seu proximo turno, dando resistencia a Encantamento e Amedrontado aos seus aliados',
            inline: true,
        },   
        {
            name: 'Canção de descanso',
            value: 'Durante descanso, cura 1d6 de HP para todos aliados',
            inline: true,
        },
        {
            name: 'Ataque Extra',
            value: 'Uma vez por turno, pode fazer um ataque extra',
            inline: true,
        },         
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
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
            name: 'Zombaria Viciosa',
            value: 'Você insulta uma criatura que você possa ver, dentro do alcance. Se ele puder ouvir, deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 1d4 de dano psíquico e terá desvantagem na próxima jogada.',
            inline: true,
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Perdição n1',
            value: 'A criatura deve realizar um CD Carisma. Sempre que um alvo que falhou nessa resistência realizar uma jogada de ataque ou um teste de resistência antes da magia acabar, o alvo deve rolar um d4 e subtrair o valor rolado da jogada de ataque ou teste de resistência.',
        },
        {
            name: 'Sono n1',
            value: 'Essa magia põem as criaturas num entorpecimento mágico. Jogue 5d8; o total é a quantidade de pontos de vida de criaturas afetados pela magia.',
        },
        {
            name: 'Fogo das fadas n1',
            value: 'Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto não recebe benefício por estar invisível.',
        },
        {
            name: 'Sussuros n1',
            value: ' O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele sofrerá 3d6 de dano psíquico e deve, imediatamente, usar sua reação, se disponível, para se mover para o mais longe possível de você. ',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },        
        {
            name: 'Detectar pensamento n2',
            value: 'Se a criatura escolhida possuir Inteligência 3 ou inferior ou não falar nenhum tipo de idioma, a criatura não poderá ser afetada.',
        },
        {
            name: 'Invisibilidade n2',
            value: 'Uma criatura que você tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invisível enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia.',
        },
        {
            name: 'Sugestão n2',
            value: 'Você sugere algo (limitado a duas sentenças) e influencia um criatura que você possa ver, dentro do alcance, e que possa ouvir e compreender você. Requer teste de sabedoria. Sugestões obviamente nocivo anulam o efeito, sofrer dano causa causa o fim da magia.',
        },        
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Falar com os mortos n3',
            value: 'Você concede o aspecto de vida e inteligência a um corpo, à sua escolha, dentro do alcance, permitindo que ele responda a 5 perguntas que você fizer, as respostas serão breves e enigmaticas. ',
        },
        {
            name: 'Névoa Fétida n3',
            value: 'Você cria um gás amarelado nauseante, cada criatura que estiver dentro da névoa no início do seu turno deve fazer teste de resistência de Constituição contra veneno. Se falhar, a criatura gastará sua ação nesse turno tentando vomitar e cambaleando.',
        },       
        {
            name: 'Rogar Maldição n3',
            value: 'Você toca uma criatura e a criatura deve ser bem sucedida em teste de resistência de Sabedoria ou será amaldiçoada (escolha um a seguir): desvantagem em testes de habilidade, desvantagem nas jogadas de ataque contra você, teste de Sabedoria no começo dos turnos ou perde a ação, seus ataques e magias causam 1d8 de dano necrótico extra a ele.',
        },  
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },                     
        {
            name: 'Localizar criatura n4',
            value: 'Descreva uma criatura que seja familiar a você. Você sente a direção da localização da criatura, contanto que a criatura esteja a até 300 metros de você. Se a criatura se mover, você saberá a direção do movimento dela.',
        }, 
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },  
        {
            name: 'Colégio da Bravura',
            value: '.',
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

exports.Sauer = {
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



exports.StatSauer = {
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

exports.SpellSauer = {
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

exports.Djohn = {
    color: 0x00FF00,
    title: 'Djohnson, the shivering',
    url: 'https://avribacki.gitlab.io/magias5e/',
    author: {
        name: 'Stats information for Djohnson',
    },
    description: 'Draconato barbaro totemico, level ' + level.toString(),
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
            name: 'Iniciativa',
            value: DjohnDes,
            inline: true,
        },
        {
            name: 'HP',
            value: '42',
            inline: true,
        },
        {
            name: 'Proficiencia',
            value: DjohnPro,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Força',
            value: DjohnFor,
            inline: true,
        },
        {
            name: 'Destreza',
            value: DjohnDes,
            inline: true,
        },
        {
            name: 'Constituição',
            value: DjohnCon,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: DjohnInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: DjohnSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: DjohnCar,
            inline: true,
        },
        {
            name: 'Espada',
            value: DjohnPro + DjohnFor + ' 2d6 ' + DjohnFor,
        },
        {
            name: 'Sopro de fogo',
            value: '2d6 (1x day)',
        },
        {
            name: 'Furia',
            value: '4x dia +2 de dano vantgem em testes',
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
    description: 'Draconato barbaro totemico, level ' + level.toString(),
    thumbnail: {
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9686ff89-c3f0-4a86-b227-b169b672a761/d3f17mn-fb1acac6-94c3-4b3e-98db-42e326279487.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85Njg2ZmY4OS1jM2YwLTRhODYtYjIyNy1iMTY5YjY3MmE3NjEvZDNmMTdtbi1mYjFhY2FjNi05NGMzLTRiM2UtOThkYi00MmUzMjYyNzk0ODcuanBnIn1dXX0.3J7FR8rm2DksjUhWNm5cddmHKZ0vSO7gFxOI_i4o_Q0',
    },
    fields: [
        {
            name: '•Força',
            value: DjohnFor + DjohnPro,
            inline: true,
        },
        {
            name: 'Destreza',
            value: DjohnDes,
            inline: true,
        },
        {
            name: '•Constituição',
            value: DjohnCon + DjohnPro,
            inline: true,
        },
        {
            name: 'Inteligencia',
            value: DjohnInt,
            inline: true,
        },
        {
            name: 'Sabedoria',
            value: DjohnSab,
            inline: true,
        },
        {
            name: 'Carisma',
            value: DjohnCar,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: '•Acrobacia',
            value: DjohnDes + DjohnPro,
            inline: true,
        },
        {
            name: 'Arcanismo',
            value: DjohnInt,
            inline: true,
        },
        {
            name: 'Atletismo',
            value: DjohnFor,
            inline: true,
        },
        {
            name: 'Atuação',
            value: DjohnCar,
            inline: true,
        },
        {
            name: 'Blefar',
            value: DjohnCar,
            inline: true,
        },
        {
            name: 'Furtividade',
            value: DjohnDes,
            inline: true,
        },
        {
            name: 'Historia',
            value: DjohnInt,
            inline: true,
        },
        {
            name: '•Intimidação',
            value: DjohnCar + DjohnPro,
            inline: true,
        },
        {
            name: 'Intuição',
            value: DjohnSab,
            inline: true,
        },
        {
            name: 'Investigação',
            value: DjohnInt,
            inline: true,
        },
        {
            name: 'Lidar com animais',
            value: DjohnSab,
            inline: true,
        },
        {
            name: 'Medicina',
            value: DjohnSab,
            inline: true,
        },
        {
            name: 'Natureza',
            value: DjohnInt,
            inline: true,
        },
        {
            name: 'Percepção',
            value: DjohnSab,
            inline: true,
        },
        {
            name: 'Persuasão',
            value: DjohnCar,
            inline: true,
        },
        {
            name: 'Prestidigitação',
            value: DjohnDes,
            inline: true,
        },
        {
            name: 'Religião',
            value: DjohnInt,
            inline: true,
        },
        {
            name: 'Sobrevivência',
            value: DjohnSab,
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
    description: 'Draconato barbaro totemico, level ' + level.toString(),
    thumbnail: {
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9686ff89-c3f0-4a86-b227-b169b672a761/d3f17mn-fb1acac6-94c3-4b3e-98db-42e326279487.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85Njg2ZmY4OS1jM2YwLTRhODYtYjIyNy1iMTY5YjY3MmE3NjEvZDNmMTdtbi1mYjFhY2FjNi05NGMzLTRiM2UtOThkYi00MmUzMjYyNzk0ODcuanBnIn1dXX0.3J7FR8rm2DksjUhWNm5cddmHKZ0vSO7gFxOI_i4o_Q0',
    },
    fields: [
        {
            name: 'Falar com animais',
            value: 'Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração.',
        },
        {
            name: 'Ataque extra',
            value: 'Quando usar ação Atacar, pode atacar duas vezes.',
            inline: true,
        },      
        {
            name: 'Instinto Selvagem',
            value: 'Vantagem rolagens de iniciativa.',
            inline: true,
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
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Aspecto da fera',
            value: 'Através de um ritual escolha um dos animais a seguir:',
            inline: true,
        },      
        {
            name: 'Urso',
            value: 'Você tem vantagem nos testes de Força feitos para empurrar, puxar, erguer ou quebrar objetos',
            inline: true,
        },
        {
            name: 'Aguia',
            value: 'Consegue enxergar 1,6km sem dificuldade, podendo ver detalhes como se estiver olhando a 30 m. A penumbra não impõe desvantagem nos testes de Sabedoria (Percepção)',
            inline: true,
        },
        {
            name: 'Lobo',
            value: 'Consegue rastrear criaturas enquanto viaja rápido e pode se mover furtivamente enquanto viaja em ritmo normal',
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



exports.StatIxpexi = {
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

exports.SpellIxpexi = {
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
