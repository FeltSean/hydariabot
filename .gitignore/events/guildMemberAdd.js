module.exports = (client, member) => {
    member.send('Bienvenue sur **Hydaria Corp** !!! =)' + member.displayName);

    member.guild.channels.find("name", "🏡╿nouveaux-partant")
        .send(` :tada: Bienvenue a toi **${member}** =) sur **Hydaria Corp** !!! `);

    const role = member.guild.roles.find("name", "Membre")
    member.addRole(role);    
};