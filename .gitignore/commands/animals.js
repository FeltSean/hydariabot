const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");



module.exports.run = async (client, message, args) => {    
    if (args[0] === "cat") {
        const cat = await fetch("http://aws.random.cat/meow")
            .then(res => res.json())
            .then(json => json.file);

        const embed = new MessageEmbed()
            .setImage(cat)
            .setFooter("Propulser par 'http://aws.random.cat/meow'");
    }
    message.delete();
};



module.exports.help = {
    name: "&animals"
}