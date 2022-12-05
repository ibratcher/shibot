
SlashCommandBuilder = require('discord.js').SlashCommandBuilder;
module.exports = {
        data: new SlashCommandBuilder()
        .setName('speak')
        .setDescription('Barks on command!'),
        async execute(interaction, client) {
            if(Math.floor((Math.random() * 10)+ 1) === 1) {
                await interaction.reply('Fine... If you say so... Woof.');
            }
            else {
                await interaction.reply('<:pouty:1043038300765687859>  You wish!');
            }
        },
};