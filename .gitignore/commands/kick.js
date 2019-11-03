const Discord = require('discord.js');

module.exports.run = async (client, message, promptMessage, args) => {

    if (message.deletable) message.delete();

    // No args
    if (!args[0]) {
        return message.reply("S'il vous plait, mettez le nom de la personne à expulser.")
            .then(m => m.delete(5000));
    }

    // No reason
    if (!args[1]) {
        return message.reply("S'il vous plait, mettez une raison valable pour son expulsion.")
            .then(m => m.delete(5000));
    }

    // No author permissions
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.reply("❌ You do not have permissions to kick members. Please contact a staff member")
            .then(m => m.delete(5000));
    }

    // No bot permissions
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.reply("❌ I do not have permissions to kick members. Please contact a staff member")
            .then(m => m.delete(5000));
    }

    const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

    // No member found
    if (!toKick) {
        return message.reply("Je ne trouve pas cette personne, veuillez réessayer")
            .then(m => m.delete(5000));
    }

    // Can't kick urself
    if (toKick.id === message.author.id) {
        return message.reply("You can't kick yourself...")
            .then(m => m.delete(5000));
    }

    // Check if the user's kickable
    if (!toKick.kickable) {
        return message.reply("Je ne peux pas expulser cette personne car elle est plus importante que moi.")
            .then(m => m.delete(5000));
    }

    let embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setThumbnail(toKick.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**> Membre expulser:** ${toKick} (${toKick.id})
            **> Kicked by:** ${message.member} (${message.member.id})
            **> Raison:** ${args.slice(1).join(" ")}`);

    message.delete();

    toKick.kick(args.slice(1).join(" "))
        .catch(err => {
            if (err) return message.channel.send(`Well.... the kick didn't work out. Here's the error ${err}`)
        });

    client.guilds.get("479356398497562634").channels.get("637400260796481555").send(embed);
};

module.exports.help = {
    name: "&kick"
}