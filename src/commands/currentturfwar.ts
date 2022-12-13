
import {ChatInputCommandInteraction, EmbedBuilder} from "discord.js";
import {fetchRegularSchedules} from "../splatoon3.ink-data";
import {SlashCommandBuilder} from "discord.js";

async function createTurfEmbed(regularSchedules: regularSchedules, index: number) {
    return new EmbedBuilder()
        .setAuthor({
            name: 'Turf War'
        })
        .setColor('#e4000f')
        .setURL('https://splatoon3.ink')
        .setTitle(`Current Turf War Maps`)
        .setDescription(`The next turf war will be on ${regularSchedules.nodes[index]!.regularMatchSetting.vsStages[0].name} and ${regularSchedules.nodes[index]!.regularMatchSetting.vsStages[1].name}.`)
        .setImage(`${regularSchedules.nodes[index]!.regularMatchSetting.vsStages[0].image.url}`)
        .addFields({
            name: 'Start Time:',
            value: `<t:${(new Date(regularSchedules.nodes[index]!.startTime).getTime()) / 1000}:R>`,
            inline: true
        })
        .addFields({
            name: 'End Time:',
            value: `<t:${(new Date(regularSchedules.nodes[index]!.endTime).getTime()) / 1000}:R>`,
            inline: true
        })

}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('currentturfwar')
        .setDescription('Shows the current turf war.'),
        async execute(interaction: ChatInputCommandInteraction) {
            const regularSchedules = await fetchRegularSchedules();
            const turfEmbed = await createTurfEmbed(regularSchedules, 0);
            await interaction.reply({embeds: [turfEmbed]});
            await interaction.followUp('This command is still in development. Please check back later!');
        }
}


