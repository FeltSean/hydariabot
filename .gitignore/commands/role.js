const Discord = require('discord.js');

module.exports.run = async (message, msg, args) => {

    const role = msg.guild.roles.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("Ce role n'existe pas =(");
    if (msg.member.roles.find(r => r.name === args[0])) 
    {
        msg.member.roles.remove(role);
        msg.channel.send(`J'ai supprimé le role ${role} à ${msg.author}.`);
    } 
    else 
    {
        msg.member.roles.author (role);
        msg.channel.send(`J'ai ajouté le role ${role} à ${msg.author}.`);
    }
}

module.exports.help = {
    name: "&role"
}