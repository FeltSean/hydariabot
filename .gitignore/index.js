const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = ("&")^

client.login(process.env.TOKEN)

client.on("emitter", (emitter) => 
{
    emitter.setMaxListeners (50)
});


client.on("message", (message) => 
{

    if(message.content === "bonjour") 
    {
		message.channel.send(" Salutation !!! ")
	}

    if(message.content === "help")
    {
		message.channel.send(" As tu besoin d'aide, si oui, écrit &help !!! ")
	}
});

client.on('ready', async () => 
{
    console.log(` ${client.user.username} est en ligne !!! `);
    client.user.setActivity(' Faites &help !!! ');
});

client.on('message', async message => 
{
	if (message.author.client) return;
	if (message.channel.type === 'dm') return;

	let prefix = config.prefix;
	let messageArray = message.content.split(' ');
	let command = messageArray[0];
	let args = messageArray.slice(1);
});

client.on('guildMemberAdd', member =>
{
    member.guild.channels.get('572902475842060319').send(' :tada: **Bienvenue** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount );
    console.log(" Une personne vient de rejoindre le serveur discord !!! Super, non ??? ")   
});

client.on('guildMemberRemove', member => 
{
    member.guild.channels.get('572902475842060319').send(' **Aurevoir** ' + user.username + ':smile: **Nous sommes** ' + member.guild.memberCount );
    console.log(" Une personne vient de quitter le serveur discord !!! Dommage, mais comme dit le proverbe: un de perdu, dix de retrouvé !!! ")
});

client.on('message' , message => 
{
    // Si le message est "KelenS" !!! //
    if (message.content === "KelenS") 
    {
        // Envoie "le lien de la chaine youtube de KelenS" dans le salon actuel !!! //
        message.channel.send(' https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos ');
    }
});



// COMMANDES //



client.on("message", message => 
{
    // Si le message contient "&ip" //
    if (message.content === ("&ip")) 
    {
        // Envoie le message "SOON" //
        message.channel.sendMessage(' SOON ');
    };
});

client.on("command", command => 
{
    // Si la commande est &say //
    if (command === ("&say")) 
    {
        // Si le bot à la permission "MANAGE_MESSAGES" //
        if(!message.member.hasPermission("MANAGE_MESSAGES"));
        // Change le message de la personne par le message du bot //
        message.delete();
        message.channel.send(messageToBot);
    };
});
