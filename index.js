//http request https://snekfetch.js.org/
//Dank memer https://github.com/IamTails/Dank-Memer-1\

//Tips
//https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3
//https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/frequently-asked-questions.md
const Discord = require("discord.js");
const client = new Discord.Client();
const {
    prefix
} = require('./config.json');
const config = require('./config.json');
const snek = require('node-fetch');
const randomPuppy = require('random-puppy');
const ytdl = require('ytdl-core');
const queue = new Map();

var ficha = require('./Constante.js');

//Roubei do muller fodasi
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

//Check how this works
async function getImages(url) {
    const images = [];
    const response = await snekfetch.get(url);
    response.body.data.children.forEach((child) => {
        child.data.preview.images.forEach((image) => {
            images.push(image.source.url);
        });
    });
    return images;
}

//Logs
client.once('ready', () => {
    console.log("Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.");
    client.user.setActivity("D&D 5e");
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

async function execute(message, serverQueue) {
    const args = message.content.split(' ');

    message.channel.send('teste ' + voiceChannel);
    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
        return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url,
    };

    if (!serverQueue) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
        };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            play(message.guild, queueContruct.songs[0]);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        return message.channel.send(`${song.title} has been added to the queue!`);
    }

}

function skip(message, serverQueue) {
    if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
    if (!serverQueue) return message.channel.send('There is no song that I could skip!');
    serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
    if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Music ended!');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
            console.error(error);
        });
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}


//Evento de mensagens
client.on('message', (message) => {
    const serverQueue = queue.get(message.guild.id);
    const voiceChannel = message.author.voiceChannel;
    //Ignora o proprio bot e mensagens q n sejam para o bot
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    //Salva os parametros em ARGS    
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (message.content.toLowerCase().startsWith(prefix)) {
        let param = args[0];
        let seco = args[1];
        switch (param) {
            //============== D&D Section                
            case "roll":
                switch (seco) {
                    case "d4":
                        message.channel.send(message.author.toString() + ", rolled a " + seco + " and got a " + Math.floor((Math.random() * 4) + 1));
                        break;
                    case "d6":
                        message.channel.send(message.author.toString() + ", rolled a " + seco + " and got a " + Math.floor((Math.random() * 6) + 1));
                        break;
                    case "d8":
                        message.channel.send(message.author.toString() + ", rolled a " + seco + " and got a " + Math.floor((Math.random() * 8) + 1));
                        break;
                    case "d10":
                        message.channel.send(message.author.toString() + ", rolled a " + seco + " and got a " + Math.floor((Math.random() * 10) + 1));
                        break;
                    case "d12":
                        message.channel.send(message.author.toString() + ", rolled a " + seco + " and got a " + Math.floor((Math.random() * 12) + 1));
                        break;
                    case "d20":
                        var dice = Math.floor((Math.random() * 20) + 1);
                        message.channel.send(message.author.toString() + ", rolled a " + seco + " and got a " + dice);
                        if (parseInt(dice) == parseInt(20)) message.channel.send("Congratulations, you got a critical hit! <:7980_joker:689262799179743257>");
                        if (parseInt(dice) == parseInt(1)) message.channel.send("Congratulations, you fucked up <:8440_vergonha:689946168553504807>");
                        break;
                    case "d100":
                        message.channel.send(message.author.toString() + ", rolled a " + seco + " and got a " + Math.floor((Math.random() * 100) + 1));
                        break;
                    default:
                        message.channel.send("Specify a dice value");
                        break;
                }
                break;
            case "ficha":
                switch (seco) {
                    case "bruce":
                        message.channel.send({ embed: ficha.Bruce });
                        break;
                    case "seph":
                        message.channel.send({ embed: ficha.Seph });
                        break;
                    case "max":
                        message.channel.send({ embed: ficha.Max });
                        break;
                    case "sauer":
                        message.channel.send({ embed: ficha.Sauer });
                        break;
                    case "djohn":
                        message.channel.send({ embed: ficha.Djohn });
                        break;
                    //============ outro RPG
                    case "randal":
                        message.channel.send({ embed: ficha.Randal });
                        break;
                    default:
                        message.channel.send("Specify a name.");
                        break;
                }
                break;
            case "stats":
                switch (seco) {
                    case "bruce":
                        message.channel.send({ embed: ficha.StatBruce });
                        break;
                    case "seph":
                        message.channel.send({ embed: ficha.StatSeph });
                        break;
                    case "max":
                        message.channel.send({ embed: ficha.StatMax });
                        break;
                    case "sauer":
                        message.channel.send({ embed: ficha.StatSauer });
                        break;
                    case "djohn":
                        message.channel.send({ embed: ficha.StatDjohn });
                        break;
                    //============ outro RPG
                    case "randal":
                        message.channel.send({ embed: ficha.Randal });
                        break;
                    default:
                        message.channel.send("Specify a name.");
                        break;
                }
                break;
            case "spell":
                switch (seco) {
                    case "bruce":
                        message.channel.send({ embed: ficha.SpellBruce });
                        break;
                    case "seph":
                        message.channel.send({ embed: ficha.SpellSeph });
                        break;
                    case "max":
                        message.channel.send({ embed: ficha.SpellMax });
                        break;
                    case "sauer":
                        message.channel.send({ embed: ficha.SpellSauer });
                        break;
                    case "djohn":
                        message.channel.send({ embed: ficha.SpellDjohn });
                        break;
                    //============ outro RPG
                    case "randal":
                        message.channel.send({ embed: ficha.Randal });
                        break;
                    default:
                        message.channel.send("Specify a name.");
                        break;
                }
                break;
            case "map":
                message.channel.send({
                    embed: {
                        color: 3447003,
                        image: { url: 'https://i.imgur.com/Xd0ABTq.jpg', }
                    }
                });
                break;
            case "names":
                message.channel.send("Players atualmente vivos:");
                message.channel.send("Mestre, o <:2216_mouse_Dorime:689946165092810762>");
                message.channel.send("Seph, o cara das musiquinhas");
                message.channel.send("Sauer, o anão careca");
                message.channel.send("Bruce, um druida alcoolatra");
                message.channel.send("Max, o veio ranzinza 🧙‍♂️");
                message.channel.send("Djohnson, o cara que a gente tocou fogo na casa 🔥");
                break;
            //============== Fun Section
            case "say":
                // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
                // To get the "message" itself we join the `args` back into a string with spaces: 
                const sayMessage = args.join(" ");
                // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
                message.delete().catch(O_o => { });
                // And we get the bot to say the thing: 
                message.channel.send("<:9311_BOT:689946783945981990> " + sayMessage.slice(3));
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
            case "funny":
                //Narnia
                randomPuppy('funny').then(url => {
                    //url retorna a URL da uma imagem aleatoria do r/funny, porém queria enviar ela como anexo no discord, e naoc omo um link
                    //message.channel.send(url);
                    message.channel.send({
                        embed: {
                            color: 3447003,
                            image: {
                                url: url,
                            },
                        }
                    });
                    //message.channel.send("My Bot's message", {files: {url}});
                });
                break;
            case "joke":
                //Need to check how snek.get work
                //  const res = snek.get('https://www.reddit.com/r/Jokes/top/.json?sort=top&t=day&limit=400');
                //  const posts = res.body.data.children.filter(post => !post.data.preview && post.data.selftext.length <= 550 && post.data.title.length <= 256);
                break;
            //=============== Music section
            case "play":
                execute(message, serverQueue);
                break;
            case "skip":
                skip(message, serverQueue);
                break;
            case "stop":
                stop(message, serverQueue);
                break;
            case "help":
                message.channel.send("<:peepoPANTIES:684752251738128425>\n\nHere is what I can do:\n*pls map* - show the current campaign map\n*pls roll dice* - roll a dice\n*pls names* - show the characters names\n\n*pls ficha name* - show the character information\n*pls stats name* - status do personagem\n*pls spell name* - spells do personagem\n\n*pls peixe* - summon a fish\n*pls funny* - summon laughs\n*pls say something* - trick a dumb");
                break;
            default:
                //message.channel.send('You need to enter a valid command!');
                //message.channel.send(`Command name: ${command}\nArguments: ${args}`);
                //message.channel.send("Vai toma no cu");
                //console.log(args[0]);
                //console.log(args[1]);0
                //randomPuppy(command).then(url => {
                //url retorna a URL da uma imagem aleatoria do r/funny, porém queria enviar ela como anexo no discord, e naoc omo um link
                //    message.channel.send(url);
                //   message.channel.send("My Bot's message", {files: {url}});
                //});
                break;
        }
    };
});
client.login(config.token);

//// Get a Member from message Mention
//message.mentions.members.first();