const Discord = require("discord.js");

module.exports = (client, message) => {
    if (message.author.bot) return;
    const args = message.content.split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!message.guild) return;
    let chaine = message.guild.channels.find('name', 'logs');
    let embed = new Discord.RichEmbed()
        .setTitle(`Message provenant de:\n ${message.author.username}`)
        .addField("Message poster sur le channel\n", message.channel.name)
        .setColor('0x6a94f1')
        .addField(`\nContenu du message:\n  ${message}`)
        .setFooter("Bot créer par KelenS")
    client.guilds.get("479356398497562634").channels.get("637400260796481555").send(embed)
};