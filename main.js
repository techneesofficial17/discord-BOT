require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE'],
});

// const command = require('./command')

client.on('ready', () => {
    const guildNum = client.guilds.cache.size;
    console.log(guildNum);

    client.user.setActivity('#help for Nees web Sevices', { type: 'WATCHING' });
    console.log('Bot is Ready !');
});

const prefix = '#';
let hiMsg = ['hi', 'hii', 'koi xa', 'hello'];
let firstHello = [
    'hey',
    'hello',
    'hi',
    'hii',
    'hola',
    'gm',
    'sup',
    'anybody here',
];
const roughWord = [
    'fuck',
    'lmao',
    'imao',
    'shit',
    'sala',
    'muji',
    'hack',
    'hacking',
    'rubber',
    'sexy',
    'fuck off',
    'lmaoo',
    'ass',
    'cock',
    'dick',
    'khatey',
    'bitch',
];
client.on('messageDelete', msg => {
    msg.channel.send('Hey ! Stop Deleting Messages !');
});
client.on('message', msg => {
    for (i = 0; i <= firstHello.length; i++) {
        if (msg.content === `${prefix}${firstHello[i]}`) {
            replyUser(msg.channel);
        }
    }

    if (msg.content === `${prefix}love`) {
        // msg.react('🥰');
        reactUser(msg.react);
    } else if (msg.content === `${prefix}activeMe`) {
        msg.member.roles.add('842095498156310538');
    } else if (msg.content === `${prefix}offlineNees`) {
        msg.member.roles.add('842098879466176554');
    } else if (msg.content === `${prefix}help`) {
        msg.reply(`SERVICES AND PRODUCTION
                    We are here for helping our customers and here I am mentioning the services of our community !
                    Full responsive website
                    PHP websites
                    Registration Form
                    Data Analyzing
                    Domain and Web Hosting
                    Graphics Designing 
                    Video editing
                    YouTube Content Creator
                    3D modeling
                    Photo editing
                    Illustrator and Art
                    Programming PDF Books
                    http://neeschal.eu5.net < About Us
                    Contact us For more Information !

                    we are one in all and the best and see you in mail !`);
    } else if (msg.content === 'website') {
        msg.reply(`http://techwithneeschal.eu5.net/,
                                        http://techneesofficial.eu5.net/,
                                        https://neeswebdevelopment.business.site/posts/7646504468338387041?hl=en-US,
                                        https://neeskinemaster.netlify.app,
                                        https://neeswebservices.app,
                                        https://neeschal-ecommerse-store.netlify.app/`);
    }
    for (let i in roughWord) {
        if (msg.content === roughWord[i]) {
            msg.reply(
                "We don't allow this things to be spoked in our server ! please stop this else you will be banned !!"
            );
            msg.react('😑');
            msg.delete({ timeout: 3000 });
        }
    }
    for (let v in hiMsg) {
        if (msg.content === hiMsg[v]) {
            msg.reply('hii , wanna chill ?');
        }
    }
});

function replyUser(u) {
    u.reply("Hey ! it's nees here what can i help you ?");
}

function reactUser(r) {
    r.react('😎');
}
// bot token
client.login(process.env.BOT_TOKEN);