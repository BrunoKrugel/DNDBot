const updated = 'Updated for 6 session';
const level = 7;

const SephFor = '-1'; //8
const SephDes = '+4'; //16 +2 (Elfo)
const SephCon = '+2'; //14
const SephInt = '+1'; //13
const SephSab = '+1'; //13
const SephCar = '+4'; //18
const SephPro = '+3';

exports.Ficha = {
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

exports.Status = {
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

exports.Spell = {
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