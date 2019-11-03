const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();
const { promisify } = require("util");
const fs = require('fs')
const Enmap = require("enmap");
const klaw = require("klaw");
const path = require("path");
client.commands = new Discord.Collection()

// On appel les fichiers que l'on a besoin

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
client.on("guildMemberRemove", member => require("./events/guildMemberRemove.js")(client, member));

fs.readdir('./events/', (error, f) => {
    if (error) { return console.error(error); }
    let events = f.filter(f => f.split('.').pop() === 'js');
    if (events.length <= 0) { return console.log('HydariaBot a trouvé 0 événement.'); }

    events.forEach((f) => {
        let events = require(`./events/${f}`);
        console.log(`${f} événement chargée !`);
    });
});

fs.readdir('./commands/', (error, f) => {
    if (error) { return console.error(error); }
    let commands = f.filter(f => f.split('.').pop() === 'js');
    if (commands.length <= 0) { return console.log('HydariaBot a trouvé 0 commande.'); }

    commands.forEach((f) => {
        let commands = require(`./commands/${f}`);
        console.log(`${f} commande chargée !`);
        client.commands.set(commands.help.name, commands);
    });
});

client.on('message', async message => {

    client.emit('checkMessage', message);

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let Args = messageArray.slice(1);
    var args = message.content.substring(PREFIX.length).split(" ");

    let commandeFile = client.commands.get(cmd.slice(PREFIX.lengh));
    if (commandeFile) commandeFile.run(client, message, Args, args)

    if (message.author.client) return;
    if (message.channel.type === 'dm') return;
});

client.on("message", (message) => {

    if (message.content === "Bonjour") {
        message.channel.send(" Salut !!! ")
    }

    if (message.content === "help") {
        message.channel.send(" As tu besoin d'aide, si oui, écrit &help !!! ")
    }



    // insulte logs
    if (!message.guild) return;
    let blacklisted = [
        'connard', 'pute', 'putain', 'ta gueule', 'connasse', 'salop', 'saloppe', 'putin'
    ];
    let foundInText = false;
    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
        message.delete();
        let embed = new Discord.RichEmbed()
            .setTitle(`Insulte provenant de:\n ${message.author.username}`)
            .addField("Message poster sur le channel\n", message.channel.name)
            .setColor('ff0000')
            .addField(`\nContenu du message:\n  ${message}`)
            .setFooter("Bot créer par KelenS")
        message.author.send("N'envoyer pas d'insulte s'il vous plait")
        client.guilds.get("479356398497562634").channels.get("637400260796481555").send(embed)
    }

    // Pub //

    // Si le message est "KelenS" !!! //
    if (message.content === "KelenS") {
        // Envoie "le lien de la chaine youtube de KelenS" dans le salon actuel !!! //
        message.channel.send("Très bon goût, tu peux aller t'abonner en cliquant sur le lien ci dessous :");
        message.channel.send(' https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos ');
    }

    // Si le message est "@KelenS-Developpeur#6535" !!! //
    if (message.content === ("@KelenS-Developpeur#6535")) {
        // Envoie le lien de sa chaine Youtube en disant d'aller s'abonner dans le salon actif !! //
        message.channel.send("Très bon goût, tu peux aller tabonner en cliquant sur le lien ci dessous :");
        message.channel.send(' https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos ');
    }

    // Si le message contient "BalDark" //
    if (message.content === ("baldark")) {
        // Envoie le message "chaine ytb" //
        message.channel.sendMessage(` Voici sa chaine Youtube : https://www.youtube.com/channel/UCVLaqqdPihW6V1wOrzuk0jg `);
        console.log(" Une personne vient d'utiliser la commande baldark pour voir sa chaine !!! ")
    };


    if (message.content === "https://") {
        message.delete();
        message.author.createDM().then(channel => {
            channel.send(`Il est strictement interdit d'envoyer des liens !!!`);
        });
    }
}); //Fin de message

client.login(TOKEN);