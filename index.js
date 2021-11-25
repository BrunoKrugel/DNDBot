const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const dotenv = require('dotenv');
dotenv.config();

var ficha = require('./constante.js');

const peixes = [
    'https://i.imgur.com/8q8tCpJ.png',
    'https://i.imgur.com/t7xxQvM.png',
    'https://i.imgur.com/G44kVY7.png',
    'https://i.imgur.com/Mxme9dt.png',
    'https://i.imgur.com/cZdrfpF.png',
    'https://i.imgur.com/cyP98eU.png',
    'https://i.imgur.com/yDWzesj.png',
    'https://i.imgur.com/hrmfOym.png',
    'https://i.imgur.com/2a9ivW1.png',
    'https://i.imgur.com/CfLxk0c.png',
    'https://i.imgur.com/0UObVR1.png',
    'https://i.imgur.com/TkJAbwN.png',
    'https://i.imgur.com/l3svjDw.png',
    'https://i.imgur.com/MoDTqst.png',
    'https://i.imgur.com/EzOFO9L.png',
    'https://i.imgur.com/zJ7naVj.png',
    'https://i.imgur.com/q0dtE3T.png',
    'https://i.imgur.com/f1TWTFU.png',
    'https://i.imgur.com/mqOeipV.png',
    'https://i.imgur.com/zQwM1tI.png',
    'https://i.imgur.com/dXR9WTp.png',
    'https://i.imgur.com/eLSJ0ap.png',
    'https://i.imgur.com/QrWqbal.png',
    'https://i.imgur.com/YSmpeXI.png',
    'https://i.imgur.com/Cvg38Rd.png',
    'https://i.imgur.com/pfn0jzn.png',
    'https://i.imgur.com/IGEj1Kj.png',
    'https://i.imgur.com/vXXmf5m.png',
    'https://i.imgur.com/TdfbTHH.png',
    'https://i.imgur.com/kP5WVBY.png',
    'https://i.imgur.com/UyBQMAc.png',
    'https://i.imgur.com/jadIWJy.png',
];

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


client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
});

//Evento de mensagens
client.on('messageCreate', message => {
    //Ignora o proprio bot e mensagens q n sejam para o bot
    if (!message.content.toLowerCase().startsWith(process.env.prefix)) return;

    //Salva os parametros em ARGS    
    const args = message.content.split(' ');

    if (message.content.toLowerCase().startsWith(process.env.prefix)) {
        let primary = args[1];
        let secondary = args[2];
        switch (primary) {
            //============== D&D Section                
            case "roll":
                var dado;
                switch (secondary) {
                    case "d4":
                        dado = Math.floor((Math.random() * 4) + 1);
                        break;
                    case "d6":
                        dado = Math.floor((Math.random() * 6) + 1);
                        break;
                    case "d8":
                        dado = Math.floor((Math.random() * 8) + 1);
                        break;
                    case "d10":
                        dado = Math.floor((Math.random() * 10) + 1);
                        break;
                    case "d12":
                        dado = Math.floor((Math.random() * 12) + 1);
                        break;
                    case "d20":
                        dado = Math.floor((Math.random() * 20) + 1);
                        if (parseInt(dado) == parseInt(20)) message.channel.send("Congratulations, you got a critical hit!");
                        if (parseInt(dado) == parseInt(1)) message.channel.send("Congratulations, on your bad luck!");
                        break;
                    case "d100":
                        dado = Math.floor((Math.random() * 100) + 1);
                        break;
                    default:
                        message.channel.send("Specify a dice value");
                        break;
                }
                message.channel.send(message.author.toString() + ", rolled a " + secondary + " and got a " + dado);
                break;
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
            case "stats":
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
            case "peixe":
                //message.channel.send({ files: [peixes[Math.floor(Math.random() * peixes.length)].toString()] });
                message.channel.send({
                    embed: {
                        color: 3447003,
                        image: {
                            url: peixes[Math.floor(Math.random() * peixes.length)].toString(),
                        },
                    }
                });
                break;
            case "help":
                message.channel.send("\nHere is what I can do:\n*pls map* - show the current campaign map\n*pls roll dice* - roll a dice\n*pls names* - show the characters names\n\n*pls ficha name* - show the character information\n*pls stats name* - status do personagem\n*pls spell name* - spells do personagem\n\n*pls peixe* - summon a fish");
                break;
        }
    };
});
client.login(process.env.token);