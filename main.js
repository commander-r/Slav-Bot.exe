const Discord = require(`discord.js`);
const { prefix, token } = require(`./config.json`);
const client = new Discord.Client();
const slavI = [
    'https://i1.sndcdn.com/artworks-000568443470-k29cfx-t500x500.jpg',
    'https://i.pinimg.com/originals/83/7e/36/837e36aa503857cd3581bf726a5ba32e.jpg',
    'https://i1.sndcdn.com/avatars-000644619750-91dszv-t500x500.jpg',
    'https://slm-assets.secondlife.com/assets/21607366/view_large/gfjfg.jpg',
    'https://c4.wallpaperflare.com/wallpaper/218/86/346/winter-figure-the-city-dove-humor-hd-wallpaper-preview.jpg'
];
const sw = [
    'https://emerging-europe.com/wp-content/uploads/2020/11/84452078-1150715281927426-2517904369458872320-o.jpg',
    'https://hg1.funnyjunk.com/thumbnails/comments/Western+spy+detected+_c8a51ee3a40a01ae21e3822f65164dad.png',
    'https://miro.medium.com/max/1800/1*t563CB3BEnmWRHGVYQxjfQ.png',
    'https://i.redd.it/o539qcpetlp11.jpg',
    'https://memegenerator.net/img/images/15565325.jpg',
    'https://pics.me.me/girls-at-adidas-omg-these-shorts-are-so-cute-boys-58141461.png',
    'https://i.pinimg.com/736x/ce/40/f7/ce40f7b235c32f3761c13f8cf93f4f56.jpg',
    'https://pbs.twimg.com/media/DNN78nfX4AUOjNM.jpg'
];
const a = [
    "Da, comrade  DA!",
    "Net comrade , never!",
    "Maybe...",
    "Yes always for you!",
    "Are you sure comrade ?",
    "COMRADE ARE YOU OUT OF YOUR MIND!?",
    "I'm not sure ask me later again.",
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'I hope for you babushka doesn\'t read this!',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ];
const detectionWords = [
    `.adidas`,
    `\n.vodka`,
    `\n.russia`,
    `\n.motherland`,
    `\n.putin`,
    `\n.stalin`,
    `\n.slav`,
    `\n.xsp`,
    `\n.djb`,
    `\n.rvb`,
    `\nYoshiboi18303`,
    `\n<@271285474516140033>`
];
const q = [
    'What games do you play comarad?',
    'What games do you have, comrade ?',
    'Comarad, are you a western spy?',
    'Adidas or nike?',
    'So who do like more, Stalin or Putin?'
];
const k = [
    'https://static.zerochan.net/Katyusha.%28GIRLS.und.PANZER%29.full.1397778.jpg',
    'https://i.pinimg.com/originals/c1/5a/7a/c15a7a833b59a7864a35d733f9c94934.jpg',
    'https://static.wikia.nocookie.net/girlsundpanzer/images/3/3d/Katyusha.jpg',
    'https://c4.wallpaperflare.com/wallpaper/125/427/733/girls-und-panzer-katyusha-anime-girls-wallpaper-preview.jpg',
    'https://i.pinimg.com/originals/97/ac/98/97ac988e10e01b649628b2f07fec2a31.jpg'
];

client.on(`ready`, () => {
    console.log(`I'm online\nMy prefix is '${prefix}'`);
    client.user.setActivity(`people screeming "${prefix}help" in ${client.guilds.cache.size} servers`, { type: 'LISTENING' });
});

client.on("message", async message =>{
    if(message.author.id === '271285474516140033'){
    if(message.content.startsWith(prefix + "setavatar")){ var image = message.attachments.first().url;
    client.user.setAvatar(image);
    message.reply("You have changed the Avatar")
}}})

client.on(`message`, message => {
    console.log(`${message.author.username} in #${message.channel.name} sent: ${message.content}`);
    if(message.author.bot) return;
    if(message.content === `${prefix}help`){
        const hEmbed = new Discord.MessageEmbed()
        .setTitle(`These are most of my commands:`)
        .setDescription(`The words in these '[]' brackets are not required arguments!\nThe words in these '<>' brackets are required arguments!`)
        .setColor(`RED`)
        .addField(`Main commands:`, `
${prefix}help \`Shows you this message!\`;
${prefix}slav \`Shows you a random image of a slav\`;
${prefix}cccp \`Shows you the logo of the CCCP\`;
${prefix}ussr \`Shows you the logo of the USSR\`;
${prefix}sw \`Shows 2 images, you need to find the real slavs in these pictures! Can you tell them appart?\`;
${prefix}comrade  \`Sends a message back :)\`;
${prefix}katyusha \`Sends a random image of Katyusha (the anime character)\`;
${prefix}botinfo \`Sends some info about the bot\`;
${prefix}support \`Sends an invite link for you to join the support server of this and some other bots\`;
slavball \`Sends a random answer to your question\`;
${prefix}github \`Sends a link to our github page\`;
${prefix}bots \`Sends a message with all the links of\`<@271285474516140033>\`'s public bots!\`.

`)
// ${prefix} \`\`.
.addField(`We also have some word detection..`, `These commands all send something different in the chat\n${detectionWords}\n\`Some words needed to have a small prefix so the bot doesn't say it when you don't want it too send it\``)
.setTimestamp()
.setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
message.channel.send(hEmbed)
    } else if(message.content === `${prefix}slav`){
        const sEmbed = new Discord.MessageEmbed()
        .setTitle(`A random slavic image:`)
        .setColor(`RED`)
        .setImage(`${slavI[Math.floor(Math.random() * slavI.length)]}`)
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        .setTimestamp()
        message.channel.send(sEmbed)
    } else if(message.content === `${prefix}cccp`){
        const cEmbed = new Discord.MessageEmbed()
        .setTitle(`Here is the cccp logo:`)
        .setColor(`RED`)
        .setImage('https://i.pinimg.com/564x/7f/a3/ba/7fa3bacec7f7114340b05fd151aec273.jpg')
        .setTimestamp()
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        message.channel.send(cEmbed)
    } else if(message.content === `${prefix}ussr`){
        const uEmbed = new Discord.MessageEmbed()
        .setTitle('Here is the USSR logo:')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Coat_of_arms_of_the_Soviet_Union_1.svg/1200px-Coat_of_arms_of_the_Soviet_Union_1.svg.png')
        .setTimestamp()
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        message.channel.send(uEmbed)
    } else if(message.content === `${prefix}sw`){
        message.channel.send(`Choose whitch one is the slav and whitch one is the western spy. ***(Sometimes both are slav or westernspy!)***`)
        const swEmbed1 = new Discord.MessageEmbed()
        .setTitle('Here is image 1, Witch one is the slav')
        .setImage(`${sw[Math.floor(Math.random() * sw.length)]}`)
        .setColor(`RED`)
        .setTimestamp()
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        message.channel.send(swEmbed1)
        const swEmbed2 = new Discord.MessageEmbed()
        .setTitle('Here is image 2, Witch one is the slav')
        .setImage(`${sw[Math.floor(Math.random() * sw.length)]}`)
        .setTimestamp()
        .setColor(`RED`)
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        message.channel.send(swEmbed2)
    } else if(message.content === `${prefix}comrade`){
        const cEmbed = new Discord.MessageEmbed()
        .setTitle(`comrade,`)
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        .setColor(`RED`)
        .addField(`I got a question for you.`, `${q[Math.floor(Math.random() * q.length)]}`)
        message.reply(cEmbed)
    } else if(message.content === `${prefix}katyusha`){
        const kEmbed = new Discord.MessageEmbed()
        .setTitle(`You also like katyusha?`)
        .setDescription('Here is a nice picture of her:')
        .setImage(`${k[Math.floor(Math.random() * k.length)]}`)
        .addField(`Link to the Girls und panser anime`, `[click here to go to to watch the anime!](https://myanimelist.net/anime/14131/Girls___Panzer/video)`)
        .setFooter(`Have fun watching ${message.author.username}! | Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        message.channel.send(kEmbed)
    } else if (message.content === `${prefix}`){
        const pEmbed = new Discord.MessageEmbed()
        .setTitle(`Hello ${message.author.username},`)
        .setDescription(`You have sent my prefix without a command.`)
        .addField(`Need Help?`, `If you want to see all my commands use the command \`${prefix}help\`}`)
        .addField(`Need Support?`, `You can join the support server [here](https://discord.io/botexe)`)
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        .setColor(`RED`)
        .setTimestamp()
        message.channel.send(pEmbed)
    } else if(message.content === `${prefix}support`){
        const sEmbed = new Discord.MessageEmbed()
        .setURL('https://discord.io/botexe')
        .setTitle(`So one of our fello comrades needs some support eh?`)
        .setDescription(`Our support server is not for this bot only!`)
        .setColor(`RED`)
        .setTimestamp()
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`);
        message.channel.send(sEmbed)
    } else if(message.content === `${prefix}botinfo`){
        const biEmbed = new Discord.MessageEmbed()
        .setTitle(`${client.user.username}`)
        .setDescription(`This bot was coded as a joke by the developer: Commander R#9371\nCommander R#9371 is a slav himself (not actually russian :( sadly enough.) But he likes Russia very much.\n\nThis bot was Coded with LOVE for the motherland!`)
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        .addField(`Bot's info`, `Bots name: ${client.user.username}\nBots Server count: ${client.guilds.cache.size}`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/271285474516140033/ef2361c198aaa26ba949d64a0bb4cccc.webp`)
        .setColor(`RED`)
        message.channel.send(biEmbed)
    } else if(message.content === `${prefix}github`){
        const ghEmbed = new Discord.MessageEmbed()
        .setTitle(`My gihub page/My code`)
        .setURL(`https://github.com/Management-Bot-exe/slav-bot.exe`)
        .setColor(`RED`)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .addField(`Our github:`, `[https://github.com/Management-Bot-exe/slav-bot.exe](https://github.com/Management-Bot-exe/slav-bot.exe)`)
        .setFooter(`Bot coded and hosted by: Commander R#9371 | comrade ${message.author.username} uxecuted this command.`)
        message.channel.send(ghEmbed)
    } else if(message.content.startsWith('slavball')){
        message.reply(`${a[Math.floor(Math.random() * a.length)]}`)
    } else if(message.content.includes('.vodka')){
        message.reply(`Save some for me Comerad`)
    } else if(message.content.includes('.adidas')){
        message.reply(`Adidas? Yes we love that!`)
    } else if(message.content.includes('.yes comrade')){
        message.channel.send(`Hello comrade how are you?`)
    } else if(message.content.includes(`.motherland`)){
        message.channel.send(`For the MOTHERLAND <@${message.author.id}>`)
    } else if (message.content.includes(`.russia`)){
        message.reply(`I hope you did say something good about Mother Russia otherwise babushka won't be happy with you!`)
    } else if (message.content.includes(`${client.user.id}`)){
        message.react("♥")
        message.reply(`Why did you talk about me? I don't like that :/\nIf you are looking for my prefix, look under this spoiler\n||${prefix}||`)
    } else if(message.content.includes(`.rvb`)){
        message.reply(`Here is there youtube channel:
https://www.youtube.com/user/bads1k`)
    } else if(message.content.includes(`.xsp`)){
        message.reply(`Here is their YouTube Channel:\nhttps://www.youtube.com/user/MrXSproject`)
    } else if (message.content.includes(`.hardbass`)){
        message.reply(`Who do you listen to when you are listening to hardbass?\nrvs \`Russian Village Boys\`\nxsp \`XS Project\`\ndjb \`DJ Blyatman\``)
    } else if(message.content.includes(`.djb`)){
        message.reply(`Here is their YouTube Channel:\nhttps://www.youtube.com/channel/UCnWnuHHjG-__QxuoZgjBgIg`)
    } else if (message.content.includes(`.putin`)){
        message.reply(`What do you want to say about putin? Be scared if you saying somthing bad!`)
    } else if (message.content.includes(`.stalin`)){
        message.reply(`Who told you to talk about our greatest leader?`)
    } else if (message.content.includes(`Yoshiboi18303`)){
        message.channel.send(`We like him. :heart:`)
    } else if (message.content.startsWith(`<@271285474516140033>`)){
        message.reply(`Thats Commander R, He responds as fast as he can. The best way to contact him is via DM tho!`)
    }
});

client.login(token)