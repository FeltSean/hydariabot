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

    client.on('messageReactionAdd', (reaction, user) => {
        var msg = reaction.message;
        if (!user.bot) {
            for (var i = 0; i < games.length; i++) {
                var game = games[i];
                if ((msg.id == game.msg0.id || msg.id == game.msg1.id) && game.stage < stages.length) {
                    var letter = unicode[letters.indexOf(reaction.emoji.name)];

                    reaction.fetchUsers().then(usrs => {
                        var reactors = usrs.array();
                        var remove_next = function (index) {
                            if (index < reactors.length)
                                reaction.remove(reactors[index]).then(() => remove_next(index + 1));
                        };

                        remove_next(0);
                    });

                    if (game.guesses.indexOf(letter) == -1) {
                        game.guesses.push(letter);
                        if (game.phrase.indexOf(letter) == -1) {
                            game.stage++;
                            game.msg0.edit(stages[game.stage]);
                        } else {
                            var sik = true;
                            for (var j = 0; j < game.phrase.length; j++) {
                                var c = game.phrase[j];
                                if (c != ' ' && game.guesses.indexOf(c) == -1) {
                                    sik = false;
                                }
                            }

                            if (sik) {
                                game.msg0.edit(stages[game.stage].replace("o", "o ~ ur not gay.. for now"));
                            }

                            game.msg1.edit(generateMessage(game.phrase, game.guesses));
                        }
                    }
                }
                games[i] = game;
            }
        }
    });



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

client.login(TOKEN);