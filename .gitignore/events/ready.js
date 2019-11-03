module.exports = (client) => {
    console.log(` ${client.user.username} est en ligne !!! `);

    // Status 
    client.user.setStatus('Online') // Your status goes here; It can be 'Online', 'idle', 'invisible', & 'dnd'

    // Activité / Jeux / Streaming
    client.user.setActivity(` &help | Membres : ${client.users.size} `);

    // Prêt 
    client.guilds.get("479356398497562634").channels.get("637400260796481555").send(' :gear: Le bot vient de démarrer ! ')
};