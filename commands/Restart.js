SlashCommandBuilder = require('discord.js').SlashCommandBuilder;
module.exports = {
        data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Restarts the bot.'),
        async execute(interaction, client) {
            if(interaction.user.id === '246831418049691650') {
                await interaction.reply('Restarting...');
                await client.destroy();
                process.exit(0);
            }
            else {
                await interaction.reply('You are not authorized to use this command.');
            }
        }
}