import {
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
    SlashCommandSubcommandBuilder
} from "discord.js";
import {fetchSchedules} from "../splatoon3.ink-data";
import type {schedules} from "../Typings/schedules";
import {pagination, StylesButton, TypesButtons} from "@devraelfreeze/discordjs-pagination";

function splitToChunks(array: any, parts: number) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}
function createFilteredAnarchyEmbeds(schedules: schedules, pageOne: EmbedBuilder, pageTwo: EmbedBuilder, pageThree: EmbedBuilder, chunks: any[]){

    let counter = 0;
    chunks.forEach((chunk, index) => {
        chunk.forEach((node: any, nodeIndex: number) => {
            console.log(counter);
            if (index === 0) {

                if (nodeIndex === 0) {
                    pageOne.addFields({
                        name: `Current: ${node.vsRule.name} ends <t:${(new Date(schedules.bankaraSchedules.nodes[counter]!.endTime).getTime()) / 1000}:R>`,
                        value: `${node.vsStages[0].name} and ${node.vsStages[1].name}`,
                        inline: false
                    })
                    counter++;
                    pageOne.setImage(`${node.vsStages[0].image.url}`)
                } else {
                    pageOne.addFields({
                        name: `${node.vsRule.name} starts <t:${(new Date(schedules.bankaraSchedules.nodes[counter]!.startTime).getTime()) / 1000}:R>`,
                        value: `${node.vsStages[0].name} and ${node.vsStages[1].name}`,
                        inline: false
                    })
                    counter++;
                }
            } else if (index === 1) {
                if (nodeIndex === 0) {
                    pageTwo.setImage(`${node.vsStages[0].image.url}`)
                }
                pageTwo.addFields({
                    name: `${node.vsRule.name} starts <t:${(new Date(schedules.bankaraSchedules.nodes[counter]!.startTime).getTime()) / 1000}:R>`,
                    value: `${node.vsStages[0].name} and ${node.vsStages[1].name}`,
                    inline: false
                })
                counter++;
            } else if (index === 2) {
                if (nodeIndex === 0) {
                    pageThree.setImage(`${node.vsStages[0].image.url}`)
                }
                pageThree.addFields({
                    name: `${node.vsRule.name} starts <t:${(new Date(schedules.bankaraSchedules.nodes[counter]!.startTime).getTime()) / 1000}:R>`,
                    value: `${node.vsStages[0].name} and ${node.vsStages[1].name}`,
                    inline: false
                })
                counter++;
            }
        })
    })
}
function createBetterEmbedList(schedules: schedules, interaction: ChatInputCommandInteraction, mode: string) {
    let pageOne = new EmbedBuilder()
        .setAuthor({
            name: 'Shibot',
            //@ts-ignore
            iconURL: interaction.client.user.avatarURL()
        })
        .setURL('https://splatoon3.ink')
    let pageTwo = new EmbedBuilder()
        .setAuthor({
            name: 'Shibot',
            //@ts-ignore
            iconURL: interaction.client.user.avatarURL()
        })
        .setURL('https://splatoon3.ink')
    let pageThree = new EmbedBuilder()
        .setAuthor({
            name: 'Shibot',
            //@ts-ignore
            iconURL: interaction.client.user.avatarURL()
        })
        .setURL('https://splatoon3.ink')

    switch (mode) {
        case 'turf': {
            let matches = schedules.regularSchedules.nodes;
            console.log(matches.length)
            let chunks = splitToChunks(matches, 3);
            pageOne
                .setColor('#d6dc00')
                .setTitle(`All Current & Upcoming Turf War Maps`)
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/2/22/Symbol_TWF.svg/2270px-Symbol_TWF.svg.png')
            pageTwo
                .setColor('#d6dc00')
                .setTitle(`All Current & Upcoming Turf War Maps`)
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/2/22/Symbol_TWF.svg/2270px-Symbol_TWF.svg.png')
            pageThree
                .setColor('#d6dc00')
                .setTitle(`All Current & Upcoming Turf War Maps`)
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/2/22/Symbol_TWF.svg/2270px-Symbol_TWF.svg.png')

            chunks.forEach((chunk, index) => {
                chunk.forEach((node: any, nodeIndex: number) => {
                    if (index === 0) {

                        if (nodeIndex === 0) {
                            pageOne.addFields({
                                name: `Current: Ends <t:${(new Date(node!.endTime).getTime()) / 1000}:R>`,
                                value: `${node.regularMatchSetting.vsStages[0].name} and ${node.regularMatchSetting.vsStages[1].name}`,
                                inline: false
                            })
                            pageOne.setImage(`${node.regularMatchSetting.vsStages[0].image.url}`)
                        } else {
                            pageOne.addFields({
                                name: `Starts <t:${(new Date(node!.startTime).getTime()) / 1000}:R>`,
                                value: `${node.regularMatchSetting.vsStages[0].name} and ${node.regularMatchSetting.vsStages[1].name}`,
                                inline: false
                            })
                        }
                    } else if (index === 1) {
                        if (nodeIndex === 0) {
                            pageTwo.setImage(`${node.regularMatchSetting.vsStages[0].image.url}`)
                        }
                        pageTwo.addFields({
                            name: `Starts <t:${(new Date(node!.startTime).getTime()) / 1000}:R>`,
                            value: `${node.regularMatchSetting.vsStages[0].name} and ${node.regularMatchSetting.vsStages[1].name}`,
                            inline: false
                        })
                    } else if (index === 2) {
                        if (nodeIndex === 0) {
                            pageThree.setImage(`${node.regularMatchSetting.vsStages[0].image.url}`)
                        }
                        pageThree.addFields({
                            name: `Starts <t:${(new Date(node!.startTime).getTime()) / 1000}:R>`,
                            value: `${node.regularMatchSetting.vsStages[0].name} and ${node.regularMatchSetting.vsStages[1].name}`,
                            inline: false
                        })
                    }
                })
            })
            break;
        }
        case 'open': {
            //Put all members of array where schedule.bankaraSchedules.nodes.bankaraMatchSettings.mode is open into a new array
            let matches: any[] = [];
            schedules.bankaraSchedules.nodes.forEach((node: any) => {
                node.bankaraMatchSettings.filter((match: any) => {
                    if (match.mode === 'OPEN') {
                        matches.push(match)
                    }
                })
            })
            console.log(matches.length)
            let chunks = splitToChunks(matches, 3);
            pageOne
                .setColor('#f6490f')
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/2048px-S2_Icon_Ranked_Battle.svg.png')
                .setTitle(`All Current & Upcoming Anarchy Open Maps`)
            pageTwo
                .setColor('#f6490f')
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/2048px-S2_Icon_Ranked_Battle.svg.png')
                .setTitle(`All Current & Upcoming Anarchy Open Maps`)
            pageThree
                .setColor('#f6490f')
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/2048px-S2_Icon_Ranked_Battle.svg.png')
                .setTitle(`All Current & Upcoming Anarchy Open Maps`)
            createFilteredAnarchyEmbeds(schedules, pageOne, pageTwo, pageThree, chunks)
            break;
        }
        case 'series': {
            //Put all members of array where schedule.bankaraSchedules.nodes.bankaraMatchSettings.mode is open into a new array
            let matches: any[] = [];
            schedules.bankaraSchedules.nodes.forEach((node: any) => {
                node.bankaraMatchSettings.filter((match: any) => {
                    if (match.mode === 'CHALLENGE') {
                        matches.push(match)
                    }
                })
            })
            console.log(matches.length)
            let chunks = splitToChunks(matches, 3);
            pageOne
                .setColor('#f6490f')
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/2048px-S2_Icon_Ranked_Battle.svg.png')
                .setTitle(`All Current & Upcoming Anarchy Series Maps`)
            pageTwo
                .setColor('#f6490f')
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/2048px-S2_Icon_Ranked_Battle.svg.png')
                .setTitle(`All Current & Upcoming Anarchy Series Maps`)
            pageThree
                .setColor('#f6490f')
                .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/2048px-S2_Icon_Ranked_Battle.svg.png')
                .setTitle(`All Current & Upcoming Anarchy Series Maps`)
            createFilteredAnarchyEmbeds(schedules, pageOne, pageTwo, pageThree, chunks)
            break;
        }
    }
    return [pageOne, pageTwo, pageThree]
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('schedule')
        .setDescription('Shows Splatoon 3 schedules')
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('turf')
                .setDescription('Shows all current & upcoming turf war maps'))
        .addSubcommand(
            new SlashCommandSubcommandBuilder()
                .setName('anarchy')
                .setDescription('Shows all current & upcoming ranked maps')
                .addStringOption(option =>
                option.setName('mode')
                    .setDescription('The mode to show')
                    .setRequired(true)
                    .addChoices(
                        {name: 'Open', value: 'open'},
                               {name: 'Series', value: 'series'}
                    ))),
    async execute(interaction: ChatInputCommandInteraction) {
        const schedules = await fetchSchedules();
        const sub = interaction.options.getSubcommand();
        switch (sub) {
            case 'turf': {
                await interaction.reply('Creating turf embed...')
                await pagination({
                    //@ts-ignore
                    embeds: createBetterEmbedList(schedules, interaction, 'turf'),
                    //@ts-ignore
                    author: interaction.member!.user,
                    interaction: interaction,
                    ephemeral: false,
                    time: 60000, // 40 seconds
                    disableButtons: false, // Remove buttons after timeout
                    fastSkip: true,
                    pageTravel: false,
                    buttons: [
                        {
                            value: TypesButtons.previous,
                            label: 'Previous Page',
                            style: StylesButton.Danger
                        },
                        {
                            value: TypesButtons.next,
                            label: 'Next Page',
                            style: StylesButton.Success
                        }
                    ]
                });
                await interaction.editReply('Viewing turf embed...');
                return;
            }

            case 'anarchy': {
                console.log(interaction.options.getString('mode'))
                await interaction.reply('Creating anarchy embed...')
                await pagination({
                    //@ts-ignore
                    embeds: createBetterEmbedList(schedules, interaction, interaction.options.getString('mode')!),
                    //@ts-ignore
                    author: interaction.member!.user,
                    interaction: interaction,
                    ephemeral: false,
                    time: 60000, // 40 seconds
                    disableButtons: false, // Remove buttons after timeout
                    fastSkip: true,
                    pageTravel: false,
                    buttons: [
                        {
                            value: TypesButtons.previous,
                            label: 'Previous Page',
                            style: StylesButton.Danger
                        },
                        {
                            value: TypesButtons.next,
                            label: 'Next Page',
                            style: StylesButton.Success
                        }
                    ]
                });
                await interaction.editReply('Viewing anarchy embed...');
                return;
            }
        }


    }
}


