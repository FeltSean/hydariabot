const Discord = require('discord.js');

module.exports.run = async (args, message) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(
            "Vous n'avez pas les permissions requises pour faire celà !"
        );
    }
    if (!args[0]) return message.channel.send('Syntaxe: &poll <question>')

    var embed = new Discord.RichEmbed()
        .setTitle(`Sondage crée par ${message.author.username}`)
        .setColor('#dc143c')
        .setFooter('Appuyez sur les réactions ci dessous.')
        .setDescription(args.join(' '))
    message.channel.send(embed);
}

module.exports.help = {
    name: "&poll"
}