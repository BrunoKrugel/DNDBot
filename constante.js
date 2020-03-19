const updated = 'Updated for 3 session';
const level = 3;

exports.Bruce = {
	color: 0xFF9900,
	title: 'Bruce, the drunk',
	url: 'https://discord.js.org',
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
		text: updated.toString(),
		icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
	},
};


exports.StatBruce = {
	color: 0xFF9900,
	title: 'Bruce, the drunk',
	url: 'https://discord.js.org',
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
	url: 'https://discord.js.org',
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
	url: 'https://discord.js.org',
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

exports.StatsSeph = {
	color: 0xFF0099,
	title: 'Seph, the one who sings',
	url: 'https://discord.js.org',
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

exports.SpellSeph = {
	color: 0xFF0099,
	title: 'Seph, the one who sings',
	url: 'https://discord.js.org',
	author: {
		name: 'Stats information for Seph',
	},
    description: 'Spell list',
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

exports.Max = {
	color: 0x0099ff,
	title: 'Max, the grumpy',
	url: 'https://discord.js.org',
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
		text: updated.toString(),
		icon_url: 'https://pm1.narvii.com/6669/0c88a7486c374d9f02fed57780c60872aabad9da_00.jpg',
	},
};

exports.Sauer = {
	color: 0xFF0000,
	title: 'Sauer, the bald',
	url: 'https://discord.js.org',
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

exports.Randal = {
	color: 0xFF0000,
	title: 'Randal, the deserter',
	url: 'https://discord.js.org',
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