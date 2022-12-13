// @ts-ignore
const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('speak')
        .setDescription('Barks on command!'),
    async execute(interaction: { user: { id: string | undefined; }; reply: (arg0: string) => any; }) {
        if ((Math.floor((Math.random() * 10) + 1) === 1) || (interaction.user.id === process.env["BOT_OWNER_ID"])) {
            await interaction.reply('Fine... If you say so... Woof.');
        } else {
            await interaction.reply('<:pouty:1043038300765687859>  You wish!');
        }
    },
};