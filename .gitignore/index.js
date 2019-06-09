const Discord = require('discord.js');
const fs = require('fs');

bot.on("bot", bot => {
    bot.commands = new Discord.Collection();


bot.login(process.env.TOKEN)

var prefix = ("&")

bot.on("emitter", (emitter) => {
    emitter.setMaxListeners (50)
});


bot.on("message", (message) => {

	if(message.content === "bonjour") {
		message.channel.send("Salutation !!!")
	}

	if(message.content === "help"){
		message.channel.send("As tu besoin d'aide, si oui, écrit &help !!!")
	}
});

bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne !!!`);
    bot.user.setActivity('http://hydaria.webou.net/Hydaria.html');
});

bot.on('message', async message => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;

	let prefix = config.prefix;
	let messageArray = message.content.split(' ');
	let command = messageArray[0];
	let args = messageArray.slice(1);
});

bot.on('guildMemberAdd', member =>{
    member.guild.channels.get('572902475842060319').send(':tada: **Bienvenue** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de rejoindre le serveur discord !!!")   
});

bot.on('guildMemberRemove', member =>{
    member.guild.channels.get('572902475842060319').send(' **Aurevoir** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de quitter le serveur discord !!!")
});

bot.on('message' , message => {
    // Si le message est "KelenS"
    if (message.content === "KelenS") {
        // Envoie "le lien de la chaine youtube de KelenS" dans le salon
        message.channel.send('https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos');
    }
});



// COMMANDES //



bot.on("message", message => {
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
})

