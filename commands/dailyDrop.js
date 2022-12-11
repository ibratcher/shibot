// noinspection JSCheckFunctionSignatures

const {EmbedBuilder} = require("discord.js");
const {fetchShop} = require("../splatoon3.ink-data");
const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dailydrop")
        .setDescription("Provides information about the current Daily Drop!"),
    async execute(interaction) {
        let shop = await fetchShop();
        await interaction.reply({embeds:[
            new EmbedBuilder()
                .setAuthor({name: shop.pickupBrand.brand.name, iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url})
                .setColor('#e4000f')
                .setTitle('Featured Gear Brand')
                .setDescription(`Today's featured gear brand is ${shop.pickupBrand.brand.name}.`)
                .setImage(shop.pickupBrand.image.url)
                .setThumbnail(shop.pickupBrand.brandGears[0].gear.brand.image.url)
                .setFooter({ text: `${shop.pickupBrand.brand.name}'s usual gear power is ${shop.pickupBrand.brand.usualGearPower.name} which ${shop.pickupBrand.brand.usualGearPower.desc.toLowerCase()}`, iconURL: shop.pickupBrand.brand.usualGearPower.image.url}),
                new EmbedBuilder()
                    .setAuthor({name: shop.pickupBrand.brand.name, iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url})
                    .setColor('#e4000f')
                    .setTitle(`${shop.pickupBrand.brandGears[0].gear.name}`)
                    .setDescription(`${shop.pickupBrand.brandGears[0].gear.name}'s primary ability is ${shop.pickupBrand.brandGears[0].gear.primaryGearPower.name} and **has ${shop.pickupBrand.brandGears[0].gear.additionalGearPowers.length} additional gear slots.**`)
                    .setImage(`${shop.pickupBrand.brandGears[0].gear.image.url}`)
                    .setThumbnail(shop.pickupBrand.brandGears[0].gear.primaryGearPower.image.url),
                new EmbedBuilder()
                    .setAuthor({name: shop.pickupBrand.brand.name, iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url})
                    .setColor('#e4000f')
                    .setTitle(`${shop.pickupBrand.brandGears[1].gear.name}`)
                    .setDescription(`${shop.pickupBrand.brandGears[1].gear.name}'s primary ability is ${shop.pickupBrand.brandGears[1].gear.primaryGearPower.name} and **has ${shop.pickupBrand.brandGears[1].gear.additionalGearPowers.length} additional gear slots.**`)
                    .setImage(`${shop.pickupBrand.brandGears[1].gear.image.url}`)
                    .setThumbnail(shop.pickupBrand.brandGears[1].gear.primaryGearPower.image.url),
                new EmbedBuilder()
                    .setAuthor({name: shop.pickupBrand.brand.name, iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url})
                    .setColor('#e4000f')
                    .setTitle(`${shop.pickupBrand.brandGears[2].gear.name}`)
                    .setDescription(`${shop.pickupBrand.brandGears[2].gear.name}'s primary ability is ${shop.pickupBrand.brandGears[2].gear.primaryGearPower.name} and **has ${shop.pickupBrand.brandGears[2].gear.additionalGearPowers.length} additional gear slots.**`)
                    .setImage(`${shop.pickupBrand.brandGears[2].gear.image.url}`)
                    .setThumbnail(shop.pickupBrand.brandGears[2].gear.primaryGearPower.image.url)
            ]});
    }
}








