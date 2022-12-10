const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Calculates the bot ping.'),
    async execute(interaction) {
        await interaction.reply(`Pong! \nBot ping: ${interaction.client.ws.ping}ms`);
    },
};