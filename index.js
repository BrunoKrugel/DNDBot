//Setup
const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const dotenv = require('dotenv');
dotenv.config();

let ficha = require('./constante.js');
let mordai = require('./personagens/mordai.js');
let bruce = require('./personagens/bruce.js');
let max = require('./personagens/max.js');
let sauer = require('./personagens/sauer.js');
let seph = require('./personagens/seph.js');
let djohn = require('./personagens/djohn.js');
let ixpexi = require('./personagens/ixpexi.js');

//Logs
client.once('ready', () => {
    console.log("Bot has started.");
    client.user.setActivity("D&D 5e");
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

//Evento de mensagens
client.on("messageCreate", (message) => {
    //Ignora o proprio bot e mensagens q n sejam para o bot
    if (!message.content.toLowerCase().startsWith(process.env.prefix)) return;

    //Salva os parametros em ARGS    
    const args = message.content.split(' ');

    if (message.content.toLowerCase().startsWith(process.env.prefix)) {
        let primary = args[1];
        let secondary = args[2];
        switch (primary) {
            case "ficha":
                switch (secondary) {
                    case "bruce":
                        message.channel.send({
                            embeds: [ficha.Bruce]
                        });
                        break;
                    case "seph":
                        message.channel.send({
                            embeds: [ficha.Seph]
                        });
                        break;
                    case "max":
                        message.channel.send({
                            embeds: [ficha.Max]
                        });
                        break;
                    case "sauer":
                        message.channel.send({
                            embeds: [ficha.Sauer]
                        });
                        break;
                    case "djohn":
                        message.channel.send({
                            embeds: [ficha.Djohn]
                        });
                        break;
                    case "ixpexi":
                        message.channel.send({
                            embeds: [ficha.Ixpexi]
                        });
                        break;
                    case "mordai":
                        message.channel.send({
                            embeds: [ficha.Mordai]
                        });
                        break;
                    default:
                        message.channel.send("Specify a name.");
                        break;
                }
                break;
            case "status":
                switch (secondary) {
                    case "bruce":
                        message.channel.send({
                            embeds: [ficha.StatBruce]
                        });
                        break;
                    case "seph":
                        message.channel.send({
                            embeds: [ficha.StatSeph]
                        });
                        break;
                    case "max":
                        message.channel.send({
                            embeds: [ficha.StatMax]
                        });
                        break;
                    case "sauer":
                        message.channel.send({
                            embeds: [ficha.StatSauer]
                        });
                        break;
                    case "djohn":
                        message.channel.send({
                            embeds: [ficha.StatDjohn]
                        });
                        break;
                    case "ixpexi":
                        message.channel.send({
                            embeds: [ficha.StatIxpexi]
                        });
                        break;
                    case "mordai":
                        message.channel.send({
                            embeds: [ficha.StatMordai]
                        });
                        break;
                    default:
                        message.channel.send("Specify a name.");
                        break;
                }
                break;
            case "spell":
                switch (secondary) {
                    case "bruce":
                        message.channel.send({
                            embeds: [ficha.SpellBruce]
                        });
                        break;
                    case "seph":
                        message.channel.send({
                            embeds: [ficha.SpellSeph]
                        });
                        break;
                    case "max":
                        message.channel.send({
                            embeds: [ficha.SpellMax]
                        });
                        break;
                    case "sauer":
                        message.channel.send({
                            embeds: [ficha.SpellSauer]
                        });
                        break;
                    case "djohn":
                        message.channel.send({
                            embeds: [ficha.SpellDjohn]
                        });
                        break;
                    case "ixpexi":
                        message.channel.send({
                            embeds: [ficha.SpellIxpexi]
                        });
                        break;
                    case "mordai":
                        message.channel.send({
                            embeds: [ficha.SpellMordai]
                        });
                        break;
                    default:
                        message.channel.send("Specify a name.");
                        break;
                }
                break;
            case "map":
                message.channel.send({
                    embeds: {
                        color: 3447003,
                        image: {
                            url: 'https://i.imgur.com/Xd0ABTq.jpg',
                        }
                    }
                });
                break;
            case "names":
                message.channel.send("Players atualmente vivos:");
                message.channel.send("Mestre, o rato");
                message.channel.send("Seph, o cara das musiquinhas");
                message.channel.send("Sauer, o anão careca");
                message.channel.send("Bruce, um druida alcoolatra");
                message.channel.send("Max, o velho ranzinza 🧙‍♂️");
                message.channel.send("Djohnson, o cara que a gente tocou fogo na casa 🔥");
                message.channel.send("Ixpexi, o sumido");
                message.channel.send("Mordai, o caloteiro");
                break;
            case "help":
                message.channel.send("\nHere is what I can do:\n*pls map* - show the current campaign map\n*pls names* - show the characters names\n\n*pls ficha name* - show the character information\n*pls status name* - status do personagem\n*pls spell name* - spells do personagem");
                break;
        }
    }
});
client.login(process.env.token);