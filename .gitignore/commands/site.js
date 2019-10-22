const Discord = require('discord.js');

module.exports.run = async (message, msg, send) => {

    let embed = new Discord.RichEmbed()
            .setDescription(' Voici le lien du site internet : https://hydaria.yj.fr/ !!! ')
            .setColor('#dc143c');
        return message.channel.send(embed);
}

module.exports.help = {
    name: "&site"
}