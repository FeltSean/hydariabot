const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas le droit d'éxécuter cette commande !!!`)
        message.channel.send("@everyone\nHey,\n c'est la fin des promotions.\n\n===== Oh, non =====\nEt si, désolé.\n\n===== Pourquoi ??? =====\nParce que les promos ont durées assez longtemps. Désolé\n Aurevoir")
        console.log("Une personne vient de faire la commande &finpromo !!!")
}

module.exports.help = {
    name: "&fpromo"
}