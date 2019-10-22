const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
client.commands = new Discord.Collection()

const config = require('./config.json');

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);
    console.log(`{$file.lengh}`);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.lengh <= 0) {
        console.log('commandes non trouvée.');
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);
    })
})

client.login(process.env.TOKEN);

process.setMaxListeners(Infinity);

client.on('ready', async () => {
    console.log(` ${client.user.username} est en ligne !!! `);
    client.user.setActivity(` &help | Membres : ${client.users.size} `);
    client.guilds.get("479356398497562634").channels.get("615309761172209664").send(' Prêt à vous servir avec toutes mes fonctionnalités. Commence par faire &help !!! :desktop: ')
});

client.on('message', async message => {

    client.emit('checkMessage', message);

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let Args = messageArray.slice(1);
    var args = message.content.substring(prefix.lengh).split(" ");

    let commandeFile = client.commands.get(cmd.slice(prefix.lengh));
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



    // Nouveau - Partant //

    client.on('guildMemberAdd', member, find => {
        member.createDM().then(channel => {
            channel.send('Bienvenue sur **Hydaria Corp** !!! =)' + member.displayName);
        });

        const channel = client.channel.find(r => r.name === "🏡╿nouveaux-partant");
        channel.send(`${member} à rejoint le serveur !`);

        const role = member.guild.roles.find("name", "Membre")
        member.addRole(role);
    });

    client.on('guildMemberRemove', member, find => {
        member.createDM().then(channel => {
            channel.send('A plus tard sur **Hydaria Corp** !!! =(' + member.displayName);
        });

        const channel = client.channel.find(r => r.name === "🏡╿nouveaux-partant");
        channel.send(`${member} viens de quitter le serveur =(`);
    });



    // Pub //

    // Si le message est "KelenS" !!! //
    if (message.content === "KelenS") {
        // Envoie "le lien de la chaine youtube de KelenS" dans le salon actuel !!! //
        message.channel.send("Très bon goût, tu peux aller t'abonner en cliquant sur le lien ci dessous :");
        message.channel.send(' https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos ');
    }

    // Si le message est "@KelenS-Developpeur" !!! //
    if (message.content === ("@KelenS-Developpeur")) {
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



    // Insultes //

    if (message.content === "con") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "merde") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "pute") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "pd") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "connard") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "connasse") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "salope") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "bite") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "baisable") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "baise") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "baiser") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "bander") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "branler") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "branlette") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "bordel") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "burnes") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chatte") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "sexe") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiant") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiante") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiasse") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chier") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiottes") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "conne") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "connerie") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "coucougnettes") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "couilles") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "couillu") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }
    if (message.content === "cul") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }
    if (message.content === "déconner") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }
    if (message.content === "déconneur") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }
    if (message.content === "emmerder") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }
});