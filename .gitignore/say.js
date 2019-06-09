const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channels.send(
        "Vous n'avez pas la permission pour faire celà !!!"
    );
    let messageToBot = args.join(' ');
    message.delete().catch();
    message.channel.send(messageToBot);
};

modules.exports.help = {
    command: "say"
};
