const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const bot = new Discord.Bot();

client.commands = new Discord.Collection();


client.login(process.env.TOKEN)

var prefix = ("&")

client.on("emitter", (emitter) => {
    emitter.setMaxListeners (50)
});


client.on("message", (message) => {

	if(message.content === "bonjour") {
		message.channel.send("Salutation !!!")
	}

	if(message.content === "help"){
		message.channel.send("As tu besoin d'aide, si oui, écrit &help !!!")
	}
});

client.on('ready', async () => {
    console.log(`${client.user.username} est en ligne !!!`);
    client.user.setActivity('http://hydaria.webou.net/Hydaria.html');
});

client.on('message', async message => {
	if (message.author.client) return;
	if (message.channel.type === 'dm') return;

	let prefix = config.prefix;
	let messageArray = message.content.split(' ');
	let command = messageArray[0];
	let args = messageArray.slice(1);
});

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('572902475842060319').send(':tada: **Bienvenue** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de rejoindre le serveur discord !!!")   
});

client.on('guildMemberRemove', member =>{
    member.guild.channels.get('572902475842060319').send(' **Aurevoir** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de quitter le serveur discord !!!")
});

client.on('message' , message => {
    // Si le message est "KelenS"
    if (message.content === "KelenS") {
        // Envoie "le lien de la chaine youtube de KelenS" dans le salon
        message.channel.send('https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos');
    }
});



// COMMANDES //



client.on("message", message => {
    if (message.content === ("&ip")) 
    {
        message.channel.sendMessage('SOON');
    };
});

bot.on("command", command => {
    if (command === ("&say")) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
        let botmessage = args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);
    };
});
