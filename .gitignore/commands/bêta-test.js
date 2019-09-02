const Discord = require('discord.js');

module.exports.run = async (args, message) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas le droit d'éxécuter cette commande !!!`)
    message.delete();
        message.channel.send("@everyone\nHey,\n en ce moment, nous recrutons des bêta testeurs pour HydariaBot.\n\n===== Cool, mais il faut faire quoi au juste ??? =====\nC'est très simple, il faut tout simplement tester les nouvelles commandes quand il y en a, les bloqueurs d'insultes et autres.\n\n===== Ah oui, pas mal. Et du coup, vous en recruter combien ??? =====\nNous en recrutons actuellement 3.\n===== Okii, comment on fait pour être recruter ??? =====Pour être recruter, il faut tout simplement nous le demander en mp privé.\nAurevoir")
        console.log("Commande de bêta testeur demandé.")
}

module.exports.help = {
    name: "&beta"
}