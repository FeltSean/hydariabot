module.exports = (client, member) => {
        member.createDM().then(channel => {
            return channel.send('A plus tard sur **Hydaria Corp** !!! =(' + member.displayName);
        });

        member.guild.channels.find("name", "🏡╿nouveaux-partant")
            .send(` Dommage **${member}** est parti, j'espère qu'il reviendra =( !!! `);
};