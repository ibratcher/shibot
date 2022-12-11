// noinspection JSCheckFunctionSignatures

const {EmbedBuilder} = require("discord.js");
const {fetchShop} = require("../splatoon3.ink-data");
const {SlashCommandBuilder} = require("discord.js");
const {pagination, TypesButtons, StylesButton} = require('@devraelfreeze/discordjs-pagination');

async function createEmbeds(shop) {
    return [
        new EmbedBuilder()
            .setAuthor({
                name: shop.pickupBrand.brand.name,
                iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url
            })
            .setColor('#e4000f')
            .setTitle('Featured Gear Brand')
            .setDescription(`Today's featured gear brand is ${shop.pickupBrand.brand.name}.`)
            .setImage(shop.pickupBrand.image.url)
            .setThumbnail(shop.pickupBrand.brand.usualGearPower.image.url)
            .addFields({
                name: 'Usual Gear Power',
                value: `${shop.pickupBrand.brand.name}'s usual gear power is ***${shop.pickupBrand.brand.usualGearPower.name}*** which ***${shop.pickupBrand.brand.usualGearPower.desc.toLowerCase()}***`
            }),
        new EmbedBuilder()
            .setAuthor({
                name: shop.pickupBrand.brand.name,
                iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url
            })
            .setColor('#e4000f')
            .setTitle(`${shop.pickupBrand.brandGears[0].gear.name}`)
            .setDescription(`${shop.pickupBrand.brandGears[0].gear.name}'s primary ability is ${shop.pickupBrand.brandGears[0].gear.primaryGearPower.name} and **has ${shop.pickupBrand.brandGears[0].gear.additionalGearPowers.length} additional gear slots.**`)
            .setImage(`${shop.pickupBrand.brandGears[0].gear.image.url}`)
            .setThumbnail(shop.pickupBrand.brandGears[0].gear.primaryGearPower.image.url),
        new EmbedBuilder()
            .setAuthor({
                name: shop.pickupBrand.brand.name,
                iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url
            })
            .setColor('#e4000f')
            .setTitle(`${shop.pickupBrand.brandGears[1].gear.name}`)
            .setDescription(`${shop.pickupBrand.brandGears[1].gear.name}'s primary ability is ${shop.pickupBrand.brandGears[1].gear.primaryGearPower.name} and **has ${shop.pickupBrand.brandGears[1].gear.additionalGearPowers.length} additional gear slots.**`)
            .setImage(`${shop.pickupBrand.brandGears[1].gear.image.url}`)
            .setThumbnail(shop.pickupBrand.brandGears[1].gear.primaryGearPower.image.url),
        new EmbedBuilder()
            .setAuthor({
                name: shop.pickupBrand.brand.name,
                iconURL: shop.pickupBrand.brandGears[0].gear.brand.image.url
            })
            .setColor('#e4000f')
            .setTitle(`${shop.pickupBrand.brandGears[2].gear.name}`)
            .setDescription(`${shop.pickupBrand.brandGears[2].gear.name}'s primary ability is ${shop.pickupBrand.brandGears[2].gear.primaryGearPower.name} and **has ${shop.pickupBrand.brandGears[2].gear.additionalGearPowers.length} additional gear slots.**`)
            .setImage(`${shop.pickupBrand.brandGears[2].gear.image.url}`)
            .setThumbnail(shop.pickupBrand.brandGears[2].gear.primaryGearPower.image.url)
    ];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dailydrop")
        .setDescription("Provides information about the current Daily Drop!"),
    async execute(interaction) {
        let shop = await fetchShop();
        await interaction.reply('Creating shop embed...')
        await pagination({
            embeds: await createEmbeds(shop), // Array of embeds objects
            author: interaction.member.user,
            interaction: interaction,
            ephemeral: false,
            time: 40000, // 40 seconds
            disableButtons: false, // Remove buttons after timeout
            fastSkip: false,
            pageTravel: false,
            buttons: [
                {
                    value: TypesButtons.previous,
                    label: 'Previous Page',
                    style: StylesButton.Primary
                },
                {
                    value: TypesButtons.next,
                    label: 'Next Page',
                    style: StylesButton.Success
                }
            ]
        })
        await interaction.editReply(`${shop.pickupBrand.brand.name}'s Daily Drop is now available!`)
    }
}








