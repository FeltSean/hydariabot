const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
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

    let msg =message.channel.send(pollEmbed);
    msg.react('✅');
    msg.react('❌');
};

modules.exports.help = {
    command: "sondage"
};
