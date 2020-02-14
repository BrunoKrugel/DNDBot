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
    console.log('Ready!');
    client.user.setActivity('D&D 5e');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

//Evento de mensagens
client.on('message', (message) => {
    //Ignora o proprio bot e mensagens q n sejam para o bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //Salva os parametros em ARGS    
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
    if (message.content.startsWith(prefix)) {
        let prim = args[0];
        let seco = args[1];
        console.log("let"+prim);
        console.log("let"+seco);
        switch (prim) {
            case "peixe":
                message.channel.send({ files: [peixes[Math.floor(Math.random() * peixes.length)].toString()] });
                break;
            case "funny":
                //Narnia
                randomPuppy('funny').then(url => {
                    //url retorna a URL da uma imagem aleatoria do r/funny, porém queria enviar ela como anexo no discord, e naoc omo um link
                    message.channel.send(url);
                    //   message.channel.send("My Bot's message", {files: {url}});
                });
                break;
            case "joke":
                //Need to check how snek.get work
                const res = snek.get('https://www.reddit.com/r/Jokes/top/.json?sort=top&t=day&limit=400');
                const posts = res.body.data.children.filter(post => !post.data.preview && post.data.selftext.length <= 550 && post.data.title.length <= 256);
                break;
            case "roll":
                message.channel.send(message.author.toString() + ", rolled a dice and got a " + Math.floor((Math.random() * 20) + 1));
                break;
            default:
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