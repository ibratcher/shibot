// @ts-ignore
const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server.'),
    async execute(interaction: { reply: (arg0: string) => any; guild: { name: any; memberCount: any; }; }) {
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(`This server is called ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    },
};