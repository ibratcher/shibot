import {
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
    SlashCommandSubcommandBuilder
} from "discord.js";
import {fetchSchedules} from "../splatoon3.ink-data";
import type {schedules} from "../Typings/schedules";

function createCurrentTurfEmbed(schedules: schedules, interaction: ChatInputCommandInteraction) {
    return new EmbedBuilder()
        .setAuthor({
            name: 'Shibot',
            //@ts-ignore
            iconURL: interaction.client.user.avatarURL()
        })
        .setColor('#7bed01')
        .setURL('https://splatoon3.ink')
        .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/3/3c/S2_Icon_Regular_Battle_alt.svg/2048px-S2_Icon_Regular_Battle_alt.svg.png')
        .setTitle(`Current Turf War Rotation`)
        .setDescription(`The current turf war rotation is on ${schedules.regularSchedules.nodes[0]!.regularMatchSetting.vsStages[0].name} and ${schedules.regularSchedules.nodes[0]!.regularMatchSetting.vsStages[1].name}.`)
        .setImage(`${schedules.regularSchedules.nodes[0]!.regularMatchSetting.vsStages[0].image.url}`)
        .addFields({
            name: 'Start Time:',
            value: `<t:${(new Date(schedules.regularSchedules.nodes[0]!.startTime).getTime()) / 1000}:R>`,
            inline: true
        })
        .addFields({
            name: 'End Time:',
            value: `<t:${(new Date(schedules.regularSchedules.nodes[0]!.endTime).getTime()) / 1000}:R>`,
            inline: true
        })
}

function createCurrentAnarchyEmbed(schedules: schedules, interaction: ChatInputCommandInteraction) {
    return new EmbedBuilder()
        .setAuthor({
            name: 'Shibot',
            //@ts-ignore
            iconURL: interaction.client.user.avatarURL()
        })
        .setColor('#f6490f')
        .setURL('https://splatoon3.ink')
        .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/2048px-S2_Icon_Ranked_Battle.svg.png')
        .setTitle(`Current Anarchy Rotation`)
        .addFields({
            name: 'Anarchy Series:',
            value: `**${schedules.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsRule.name}** on\n${schedules.bankaraSchedules.nodes[0]!.bankaraMatchSettings[0].vsStages[0].name} and ${schedules.bankaraSchedules.nodes[0]!.bankaraMatchSettings[0].vsStages[1].name}.`,
            inline: true
        })
        .addFields({
            name: 'Anarchy Open:',
            value: `**${schedules.bankaraSchedules.nodes[0].bankaraMatchSettings[1].vsRule.name}** on\n${schedules.bankaraSchedules.nodes[0]!.bankaraMatchSettings[1].vsStages[0].name} and ${schedules.bankaraSchedules.nodes[0].bankaraMatchSettings[1].vsStages[1].name}.`,
            inline: true
        })
        .addFields({
            name: 'Start Time:',
            value: `<t:${(new Date(schedules.bankaraSchedules.nodes[0].startTime).getTime()) / 1000}:R>`,
            inline: false
        })
        .addFields({
            name: 'End Time:',
            value: `<t:${(new Date(schedules.bankaraSchedules.nodes[0].endTime).getTime()) / 1000}:R>`,
            inline: true
        })
        .setImage(`${schedules.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsStages[0].image.url}`)
}

function createTurfListEmbed(schedules: schedules, interaction: ChatInputCommandInteraction) {
    return new EmbedBuilder()
        .setAuthor({
            name: 'Shibot',
            //@ts-ignore
            iconURL: interaction.client.user.avatarURL()
        })
        .setColor('#7bed01')
        .setURL('https://splatoon3.ink')
        .setTitle(`All Upcoming Turf War Maps`)
        .setDescription(`The current turf war is on ${schedules.regularSchedules.nodes[0].regularMatchSetting.vsStages[0].name} and ${schedules.regularSchedules.nodes[0].regularMatchSetting.vsStages[1].name} and ends <t:${(new Date(schedules.regularSchedules.nodes[0].endTime).getTime()) / 1000}:R>.`)
        .setImage(`${schedules.regularSchedules.nodes[0].regularMatchSetting.vsStages[0].image.url}`)
        .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/3/3c/S2_Icon_Regular_Battle_alt.svg/2048px-S2_Icon_Regular_Battle_alt.svg.png')
}

function updateEmbedList(schedules: schedules, embed: EmbedBuilder) {
    schedules.regularSchedules.nodes.forEach((node, index) => {
        let isCurrent: string;
        if (index === 0) {
            isCurrent = "Current Stage: "
        } else {
            isCurrent = ""
        }
        embed.addFields({
            name: `${isCurrent}<t:${(new Date(schedules.regularSchedules.nodes[index]!.startTime).getTime()) / 1000}:t> - <t:${(new Date(schedules.regularSchedules.nodes[index]!.endTime).getTime()) / 1000}:t>`,
            value: `${node.regularMatchSetting.vsStages[0].name} and ${node.regularMatchSetting.vsStages[1].name}`,
            inline: false
        })
    })
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('schedule')
        .setDescription('Shows Splatoon 3 schedules')
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('currentturf')
                .setDescription('Shows current turf war maps'))
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('listturf')
                .setDescription('Shows all current & upcoming turf war maps'))
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('currentanarchy')
                .setDescription('Shows current ranked maps'))
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('listranked')
                .setDescription('Shows all current & upcoming ranked maps')),
    async execute(interaction: ChatInputCommandInteraction) {
        const regularSchedules = await fetchSchedules();
        const turfEmbed = createCurrentTurfEmbed(regularSchedules, interaction);
        const sub = interaction.options.getSubcommand();
        switch (sub) {
            case 'currentturf': {
                await interaction.reply({embeds: [turfEmbed]});
                return;
            }
            case 'listturf': {
                let turfListEmbed = createTurfListEmbed(regularSchedules, interaction);
                updateEmbedList(regularSchedules, turfListEmbed);
                await interaction.reply({embeds: [turfListEmbed]});
                return;
            }
            case 'currentanarchy': {
                const anarchyEmbed = createCurrentAnarchyEmbed(regularSchedules, interaction);
                await interaction.reply({embeds: [anarchyEmbed]});
                return;
            }
        }


    }
}


