const Discord = require('discord.js');
const client = new Discord.Client();

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
    console.log('HydariaBot est en ligne !!! Vous pouvez désormais être tranquille car au moins, le discord est protéger par lui !!!');
    client.user.setActivity('http://hydaria.co.nf/');
});

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('572902475842060319').send(':tada: **Bienvenue** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de rejoindre le serveur discord !!!")   
});

client.on('guildMemberRemove', member =>{
    member.guild.channels.get('572902475842060319').send(' **Aurevoir** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de quitter le serveur discord !!!")
});




    //COMMANDES !!!


    //Commande: HELP

client.on("message", (message) => {
	if(message.content === "&help") {
		let botIcon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription('__***Les commandes***__')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField('Nom du bot', client.user.username)
            .addField('Commandes', '---------------')
            .addField(`${prefix}info`, 'Renvoie des informations sur le bot')
            .addField(`${prefix}say`, 'Fait une annonce')
            .addField(`${prefix}ip`, `Montre l'ip du serveur`)
            .addField(`${prefix}clear`, 'Supprime certains message')
            .addField(`${prefix}site`, `Montre l'URL du site officiel du serveur`)
            .addField(`${prefix}kick`, 'Expulse les personnes');

        return message.channel.send(embed);
	}
});



    //Commande: Herizia

client.on("message", (message) => {
	if(message.content === "&herizia") {
        let botIcon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setTitle('Herizia')
            .setDescription('***Nous ne sommes actuellement plus en partenariat avec Herizia!!!***')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField(`Site`,)
            .addField(`IP`,)
            .addField(`Discord`,)

        return message.channel.send(embed);
    }
});
    


    //Commande: SONDAGE

client.on("message", (message) => {
	if(message.content === "&sondage") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(
                "Vous n'avez pas la permission pour faire celà !!!"
            );
        }
        if (!args[0]) return message.channel.send(`Syntaxe: ${prefix} poll question`);

        const pollEmbed = new Discord.RichEmbed()
            .setTitle(`Sondage crée par ${message.author.username}`)
            .setColor('#dc143c')
            .setFooter('Appuyez sur les réactions ci-dessous.')
            .setDescription(args.join(' '));

        let msg =message.channel.send(pollEmbed);
        msg.react('✅');
        msg.react('❌');
    }
});
    


    //Commande: INFO

client.on("message", (message) => {
	if(message.content === "&info") {
        let botIcon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription('__***Les infos***__')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField('Nom du bot', client.user.username)
            .addField('Créer le', client.user.createdAt);

        return message.channel.send(embed);
    }
});
    


    //Commande: SAY

client.on("message", (message) => {
	if(message.content === "&say") {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channels.send(
                "Vous n'avez pas la permission pour faire celà !!!"
            );
        let messageToBot = args.join(".");
        message.delete();
        message.channel.send(messageToBot);
    }
});
    


    //Commande: IP

client.on("message", (message) => {
	if(message.content === "&ip") {
        return message.channel.send('SOON');
    }
});
    


    //Commande: CLEAR

client.on("message", (message) =>{
    if(message.content === "&clear") {
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
	
    


    //Commande: SITE

client.on("message", (message) => {
	if(message.content === "&site") {
        return message.channel.send('L"url du site est : http://hydaria.co.nf/');
    }
});
    


    client.on('message' , message => {
        // Si le message est "KelenS"
        if (message.content === "KelenS") {
            // Envoie "le lien de la chaine youtube de KelenS" dans le salon
            message.channel.send('https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos');
        }
    });


    //Commande: KICK

client.on("message", (message) => {
	if(message.content === "&kick") {
        let kickedUser = message.guild.member(
            message.mentions.users.first() || message.guild.members.get(args[0])
        );
        if (!kickedUser) {
            return message.channel.send("L'utilisateur n'existe pas !!!");
        }
        let kickReason =  args.join(' ').slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("Vous n'avez pas les permissions pour faire celà !!!");
        }
        if (kickedUser.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("Vous ne pouvez pas kické cette personne !!!");
        }

        let kickEmbed = new Discord.RichEmbed()
            .setDescription('kicks')
            .setColor('red')
            .addField(
                'Utilisateur kick',
                '${kickedUser} (ID: ${kickedUser.id})'
            )
            .addField(
                'Utilisateur ayant kické',
                '${message.author} ID: ${message.author.id})'
            )
            .addField('Canal', message.channel)
            .addField('Raison', kickReason);

        let kickChannel = message.guild.channels.find('name', 'kické');
        if (kickChannel) {
            return message.channel.send(
                "Canal 'Kick' introuvable. Veuillez créer ce canal !!!"
            );
        }
        message.guild.member(kickedUser).kick(kickReason);
        kickChannel.send(kickEmbed);
    }
});