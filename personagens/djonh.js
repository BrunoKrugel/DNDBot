const updated = 'Updated for 6 session';
const level = 7;

const DjohnFor = '+5'; //20
const DjohnDes = '+1'; //12
const DjohnCon = '+1'; //13
const DjohnInt = '+0'; //9
const DjohnSab = '-1'; //8
const DjohnCar = '+1'; //12
const DjohnPro = '+3';

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
