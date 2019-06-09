const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir(`./commands/`, (err, files) => {
    if (err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() ==='js');
    if (jsFile.lenght <= 0) {
        console.log('Je ne trouve pas la commande');
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

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

	let commandFile = client.commands.get(command.slice(prefix.length));
	if (commandFiles) commandFile.run(client, message, args);
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
