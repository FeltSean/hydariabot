module.exports = (client, message) => {
    if (message.author.bot) return;
    const args = message.content.split(/ +/g);
    const command = args.shift().toLowerCase();
};