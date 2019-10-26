const Discord = require("discord.js");

module.exports.run = async (message, msg) => {
    if (msg.author.bot) return;
    const args = msg.content.split(/ +/g);
    const cmd = args.shift().toLowerCase();
    msg.channel.send(args.join(" "));
    msg.delete();
};

module.exports.help = {
    name: "&say"
}