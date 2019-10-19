const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas le droit d'éxécuter cette commande !!!`)
        message.channel.send("Hey,\n**HydariaBot** : En ligne\n**Koya** : En ligne\n**Mee6** : En ligne\n**Rythm** : En ligne\n**GiveawayBot** : En ligne\n**YAGPDB** : En ligne")
        console.log("commande de botstats demandé")
        message.delete();
}

module.exports.help = {
    name: "&botstats"
}