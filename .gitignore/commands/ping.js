const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas le droit d'éxécuter cette commande !!!`)
        message.reply('\nLe **BOT** a mis: ' + `[ **${message.createdTimestamp - message.createdTimestamp}**` + ' **Ms** ] pour répondre.\nEt l\'**API** a mis: ' + `[ **${Math.round(client.ping)}**` + ' **Ms** ] pour répondre')
}

module.exports.help = {
    name: "&ping"
}