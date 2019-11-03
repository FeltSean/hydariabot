const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
    const msgToDelete = args[0]
      ? `**${args[0]} messages supprimés.**`
      : "Salon nettoyé (100 messages maximum par commande)";
    message.channel.fetchMessages({ limit: args[0] }).then(messages => {
      message.channel.bulkDelete(messages);
      message.channel.send(msgToDelete).then(msg => msg.delete(3000));
    });
    client.guilds.get("479356398497562634").channels.get("637400260796481555").send(' :hammer_pick: Une personne vient de clear des messages ! ')
  } catch (e) {
    console.log(e);
  }
};

module.exports.help = {
  name: "&clear"
}