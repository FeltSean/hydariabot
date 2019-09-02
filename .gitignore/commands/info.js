const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let botIcon = client.user.displayAvatarURL;
        let infoEmbed = new Discord.RichEmbed()
            .setDescription('__***Les infos***__')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField('Nom du bot', client.user.username)
            .addField('Créer le', client.user.createdAt)
            .addField('Créer par KelenS', ':')
            .setFooter('https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos');

        return message.channel.send(infoEmbed);
}

module.exports.help = {
    name: "&info"
}