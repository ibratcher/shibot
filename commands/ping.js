SlashCommandBuilder = require('discord.js').SlashCommandBuilder;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction, client) {
        await interaction.reply('Pong!');
    },
};