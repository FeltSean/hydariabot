const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ("&")^

client.login(process.env.TOKEN);

client.on("emitter", (emitter) => 
{
    emitter.setMaxListeners (50);
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

client.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "【🏡】nouveaux")
    .send(` Bienvenue a toi ${member} sur ${SERVER}, nous sommes actuellement ${memberCount} !!! `)
});

client.on('guildMemberRemove', member => {
    member.guild.channels.find("name", "【🏡】nouveaux")
    .send(` Aurevoir ${member}, nous sommes actuellement ${memberCount} !!! `)
});

client.on("message", message => {
    if (message.content === ("serverlist")) {
        message.channel.send(client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    }
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
        message.channel.sendMessage(` Bientôt, veuillez patienter s'il vous plait `);
        console.log(" Une personne vient d'utiliser la commande &ip pour voir l'ip du serveur !!! ")
    };
});

client.on("message", message => {
    // Si la commande est &help //
    if (message.content === ("&help")) {
        let botIcon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription('__***Les commandes***__')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField('Nom du bot', client.user.username)
            .addField('Commandes', '---------------')
            .addField('&info', 'Renvoie des informations sur le bot')
            .addField('&say', 'Fait une annonce')
            .addField('&ip', `Montre l'ip du serveur`)
            .addField('&clear', 'Supprime certains message')
            .addField('&site', `Montre l'URL du site officiel du serveur`)
            .addField('&kick', 'Expulse les personnes')
            .addField('serverlist', 'Enonce combien on est sur Hydaria');
    
        return message.channel.send(embed);
    }
});

client.on("message", message => {
    // Si la commande est &clear //
    if (message.content === ("&clear")) {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("Vous n'avez pas la permission");
        if (!args[0])
        return message.reply(
            "Syntaxe: &clear <entrer le nombre de message à supprimer"
    );
    
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel
                .send(`J'ai supprimé ${args[0]} messages pour vous !!!`)
                .then(msg => msg.delete(5000));
        });
    }
});

client.on("message", message => {
    // Si la commande est &site //
    if (message.content === ("&site")) {
        let embed = new Discord.RichEmbed()
            .setDescription(' Voici le lien du site internet : http://hydaria.websr.fr/ !!! ')
            .setColor('#dc143c');
        return message.channel.send(embed);
    }
});
