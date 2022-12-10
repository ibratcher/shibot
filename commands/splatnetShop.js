SlashCommandBuilder = require("discord.js").SlashCommandBuilder;
data = require('../splatoon3.ink-data.js');
//import currentShop
module.exports = {
    data: new SlashCommandBuilder()
        .setName("splatnetshop")
        .setDescription("Provides information about the current SplatNet Shop rotation."),
    async execute(interaction) {
        let shop = await data.fetchShop();
        await interaction.reply('Current featured brand in shop is ' + shop.pickupBrand.brand.name)
        await interaction.followUp('This command is currently under construction.')
    }
}








