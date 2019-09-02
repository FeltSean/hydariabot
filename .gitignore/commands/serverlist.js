const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    message.channel.send(client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
}

module.exports.help = {
    name: "&serverlist"
}