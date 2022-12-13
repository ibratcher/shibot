// @ts-ignore
import {ChatInputCommandInteraction} from "discord.js";

import {SlashCommandBuilder} from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Calculates the bot ping.'),
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply(`Pong! \nBot ping: ${interaction.client.ws.ping}ms`);
    },
};