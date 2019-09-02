const Discord = require('discord.js');

module.exports.run = async (args, message) => {

    if (message.channel.type === "dm") return;
    message.delete();
    if (message.author.client) return;
    var mentionned = message.mentions.users.firt()
    if (message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.reply("Vous n'avez pas la permission")
    if (message.mentions.users.size === 0) {
        return message.channel.send("Vous n'avez pas mentionné d'utilisateur");
    } else {
        const args = message.content.split(' ').slice(1)
        if (args[0] === "<@!" + mentionned.id + ">" || args[0] === "<@" + mentionned.id + ">") {
            message.channel.send(`${mentionned.tag} a été averti !`)
            mentionned.send(`Bonjour, vous venez d'être averti dans le serveur de ${message.guild.name} par ${message.author.username}\nRaison : ${args.slice(1).join(' ')}`)
        } else {
            return message.reply("Utilisation incorrect")
        }
    }
}

module.exports.help = {
    name: "&warn"
}