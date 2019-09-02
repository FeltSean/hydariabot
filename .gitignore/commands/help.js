const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let botIcon = client.user.displayAvatarURL;
    var help_embed = new Discord.RichEmbed()
        .setDescription('__***Les commandes***__')
        .setColor('#dc143c')
        .setThumbnail(botIcon)
        .addField('Nom du bot', client.user.username)
        .addField('Commandes', '---------------')
        .addField(`&info`, 'Renvoie des informations sur le bot')
        .addField(`&promo`, 'infos sur les promotions')
        .addField(`&fpromo`, "Enonce que c'est la fin des promos")
        .addField(`&clear`, 'Supprime certains message')
        .addField(`&site`, `Montre l'URL du site officiel du serveur`)
        .addField(`&kick`, 'Expulse un membre')
        .addField(`&ping`, 'Latence du bot')
        .addField(`&warn`, 'avertit un membre **[MAINTENANCE]**')
        .addField('&poll', `faire un sondage **[MAINTENANCE]**`)
        .addField('&beta', "Annonce de recrutement de beta testeurs")
        .addField('&stats', "Affiche les statistique de l'utilisateur **[MAINTENANCE]**")
        .addField('&botstats', "Affiche les bots en ligne")
        .addField(`&serverlist`, 'Enonce combien on est sur Hydaria')
        message.author.sendMessage(help_embed)
        message.channel.sendMessage("Les commandes vous ont été envoyé en privé !!! Allez voir.")
        console.log("commande d'aide demandé")
        message.delete();
}

module.exports.help = {
    name: "&help"
}