const Discord = require('discord.js');

module.exports.run = async (message, msg) => {

    const perm = this.client.config.permLevels.find(l => l.level === level)
    .name;
    message.reply(`Ton niveau de permission est : ${level} - ${perm}.`);
};

module.exports.help = {
    name: "&myperm"
}