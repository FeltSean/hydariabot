const Discord = require('discord.js');

module.exports.run = async (msg, message) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas le droit d'éxécuter cette commande !!!`)
        message.channel.send("@everyone\nHey,\n en ce moment, nous faisons des promotions sur les bots.\n\n===== Cool, mais de combien ??? =====\nNous faisons actuellement des promotions de 50% sur les bots.\n\n===== Ah oui, pas mal. Et du coup, maintenant c'est combien ??? =====\nDésormais c'est à 2,50€.\n Aurevoir")
        console.log("Une personne vient de faire la commande &promo !!!")
}

module.exports.help = {
    name: "&promo"
}