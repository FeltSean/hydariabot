module.exports = (client) => {
    console.log(` ${client.user.username} est en ligne !!! `);
    client.user.setActivity(` &help | Membres : ${client.users.size} `);
    client.guilds.get("479356398497562634").channels.get("615309761172209664").send(' :gear: Le bot vient de démarrer ! ')
};