const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Restarts the bot.'),
    async execute(interaction) {
        if (interaction.user.id === process.env.BOT_OWNER_ID) {
            await interaction.reply('Restarting...');
            await interaction.client.destroy();
            process.exit(0);
        } else {
            await interaction.reply('You are not authorized to use this command.');
        }
    }
}