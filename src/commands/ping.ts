// @ts-ignore
const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Calculates the bot ping.'),
    async execute(interaction: { reply: (arg0: string) => any; client: { ws: { ping: any; }; }; }) {
        await interaction.reply(`Pong! \nBot ping: ${interaction.client.ws.ping}ms`);
    },
};