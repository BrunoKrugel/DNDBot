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

let mordai = require('./resources/mordai.js');
let bruce = require('./resources/bruce.js');
let max = require('./resources/max.js');
let sauer = require('./resources/sauer.js');
let seph = require('./resources/seph.js');
let djohn = require('./resources/djohn.js.js');
let ixpexi = require('./resources/ixpexi.js');


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
                            embeds: [bruce.Ficha]
                        });
                        break;
                    case "seph":
                        message.channel.send({
                            embeds: [seph.Ficha]
                        });
                        break;
                    case "max":
                        message.channel.send({
                            embeds: [max.Ficha]
                        });
                        break;
                    case "sauer":
                        message.channel.send({
                            embeds: [sauer.Ficha]
                        });
                        break;
                    case "djohn":
                        message.channel.send({
                            embeds: [djohn.Ficha]
                        });
                        break;
                    case "ixpexi":
                        message.channel.send({
                            embeds: [ixpexi.Ficha]
                        });
                        break;
                    case "mordai":
                        message.channel.send({
                            embeds: [mordai.Ficha]
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
                            embeds: [bruce.Status]
                        });
                        break;
                    case "seph":
                        message.channel.send({
                            embeds: [seph.Status]
                        });
                        break;
                    case "max":
                        message.channel.send({
                            embeds: [max.Status]
                        });
                        break;
                    case "sauer":
                        message.channel.send({
                            embeds: [sauer.Status]
                        });
                        break;
                    case "djohn":
                        message.channel.send({
                            embeds: [djohn.Status]
                        });
                        break;
                    case "ixpexi":
                        message.channel.send({
                            embeds: [ixpexi.Status]
                        });
                        break;
                    case "mordai":
                        message.channel.send({
                            embeds: [mordai.Status]
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
                            embeds: [bruce.Spell]
                        });
                        break;
                    case "seph":
                        message.channel.send({
                            embeds: [seph.Spell]
                        });
                        break;
                    case "max":
                        message.channel.send({
                            embeds: [max.Spell]
                        });
                        break;
                    case "sauer":
                        message.channel.send({
                            embeds: [sauer.Spell]
                        });
                        break;
                    case "djohn":
                        message.channel.send({
                            embeds: [djohn.Spell]
                        });
                        break;
                    case "ixpexi":
                        message.channel.send({
                            embeds: [ixpexi.Spell]
                        });
                        break;
                    case "mordai":
                        message.channel.send({
                            embeds: [mordai.Spell]
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