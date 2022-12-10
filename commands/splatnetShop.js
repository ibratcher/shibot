const {EmbedBuilder} = require("discord.js");
SlashCommandBuilder = require("discord.js").SlashCommandBuilder;
data = require('../splatoon3.ink-data.js');
//import currentShop
module.exports = {
    data: new SlashCommandBuilder()
        .setName("splatnetshop")
        .setDescription("Provides information about the current SplatNet Shop rotation."),
    async execute(interaction) {
        let shop = await data.fetchShop();
        await interaction.reply({embeds: [
            new EmbedBuilder()
                .setAuthor({name: shop.pickupBrand.brand.name, iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url})
                .setColor('#e4000f')
                .setTitle('Featured Gear Brand')
                .setDescription(`Today's featured gear brand is ${shop.pickupBrand.brand.name}.`)
                .setImage(shop.pickupBrand.image.url)
            ]});
        await interaction.followUp('This command is currently under construction.')
    }
}








