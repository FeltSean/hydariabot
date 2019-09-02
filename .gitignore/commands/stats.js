const Discord = require('discord.js');

module.exports.run = async (client, message, username) => {

    var stat_embed = new Discord.RichEmbed()
        .setDescription('__***Statistiques***__')
        .setColor('#dc143c')
        .setThumbnail(client.user.username)
        .addField('ID', client.id)
        .addField('Crée le', client.user.createdAt)
        .addField(`Jeu`, `${client.user.presence.game ? `${client.user.presence.game.name}` : "Aucun jeu"}`)
        .addField(`Rejoint le `, client.user.joinedAt)
        .setFooter(`Informations de l'utilisateur ${client.user.username}`)
        message.channel.send(stat_embed)
        console.log("commande de stats demandé")
        message.delete();
}

module.exports.help = {
    name: "&stats"
}