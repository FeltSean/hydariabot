const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true });

var prefix = ("&")

bot.on('ready', async () => {
    console.log('HydariaBot est en ligne !!! Vous pouvez désormais être tranquille car au moins, le discord est protéger par lui !!!');
    bot.user.setActivity('http://hydaria.co.nf/');
});

bot.on('guildMemberAdd', member =>{
    member.guild.channels.get('572902475842060319').send(':tada: **Bienvenue** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de rejoindre le serveur discord !!!")   
});

bot.on('guildMemberRemove', member =>{
    member.guild.channels.get('572902475842060319').send(' **Aurevoir** ' + member.user + ':smile: **Nous sommes** ' + member.guild.memberCount);
    console.log("Une personne vient de quitter le serveur discord !!!")
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dn') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

bot.login("NDE0ODU1OTc5NTcwODIzMTY4.D1MTSg.MCaegpRN3Tf2Z1gX41T0L62uuGg");

    //COMMANDES !!!

    //Commande: HELP

    if (command === '&help') {
        let botIcon = bot.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription('__***Les commandes***__')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField('Nom du bot', bot.user.username)
            .addField('Commandes', '---------------')
            .addField(`${prefix}info`, 'Renvoie des informations sur le bot')
            .addField(`${prefix}say`, 'Fait une annonce')
            .addField(`${prefix}ip`, `Montre l'ip du serveur`)
            .addField(`${prefix}clear`, 'Supprime certains message')
            .addField(`${prefix}site`, `Montre l'URL du site officiel du serveur`)
            .addField(`${prefix}kick`, 'Expulse les personnes');

        return message.channel.send(embed);
    };

    //Commande: Herizia

    if (command === '&herizia') {
        let botIcon = bot.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setTitle('Herizia')
            .setDescription('***Nous ne sommes actuellement plus en partenariat avec Herizia!!!***')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField(`Site`, '')
            .addField(`IP`, '')
            .addField(`Discord`, ``)

        return message.channel.send(embed);
    };

    //Commande: SONDAGE

    if (command === '&sondage') {
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

        let msg = await message.channel.send(pollEmbed);
        await msg.react('✅');
        await msg.react('❌');
    };


    //Commande: INFO

    if (command === '&info') {
        let botIcon = bot.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription('__***Les infos***__')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField('Nom du bot', bot.user.username)
            .addField('Créer le', bot.user.createdAt);

        return message.channel.send(embed);
    }


    //Commande: SAY

    if (command === '&say') {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channels.send(
                "Vous n'avez pas la permission pour faire celà !!!"
            );
        let messageToBot = args.join(" ");
        message.delete();
        message.channel.send(messageToBot);
    }


    //Commande: IP

    if (command === '&ip') {
        return message.channel.send('SOON');
    }


    //Commande: CLEAR

    if (command === '&clear') {
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
    };


    //Commande: SITE

    if (command === '&site') {
        return message.channel.send('L"url du site est : http://hydaria.co.nf/');
    }


    bot.on('message' , message => {
        // Si le message est "ping"
        if (message.content === 'KelenS') {
            // Envoie "pong" dans le salon
            message.channel.send('https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos');
        }
    });


    //Commande: KICK

    if (command === '&kick') {
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
