const Discord = require("discord.js");

module.exports.run = async (client, message, command, args) => {
  try {
    message.reply(":gear: Le bot est en train de redémarrer !");
    this.client.commands.forEach(async commands => {
      this.client.unloadCommand(commands);
    });
    process.exit(1);
  } catch (e) {
    console.log(e);
  }
};

module.exports.help = {
  name: "&reboot"
}