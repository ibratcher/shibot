import {Events, MessageReaction, User} from "discord.js";
//Events and game role menu environment variables
const octolingEmojiID = process.env["OCTOLING_EMOJI_ID"],
    octolingRoleID = process.env["OCTOLING_ROLE_ID"],
    inklingEmojiID = process.env["INKLING_EMOJI_ID"],
    inklingRoleID = process.env["INKLING_ROLE_ID"],
    anyaPeekEmojiID = process.env["ANYA_EMOJI_ID"],
    animeRoleID = process.env["ANIME_ROLE_ID"];

//Platform role menu environment variables
const switchEmojiID = process.env["SWITCH_EMOJI_ID"],
    switchRoleID = process.env["SWITCH_ROLE_ID"],
    xboxEmojiID = process.env["XBOX_EMOJI_ID"],
    xboxRoleID = process.env["XBOX_ROLE_ID"],
    playstationEmojiID = process.env["PLAYSTATION_EMOJI_ID"],
    playstationRoleID = process.env["PLAYSTATION_ROLE_ID"],
    mobileEmojiID = process.env["MOBILE_EMOJI_ID"],
    mobileRoleID = process.env["MOBILE_ROLE_ID"],
    pcEmojiID = process.env["PC_EMOJI_ID"],
    pcRoleID = process.env["PC_ROLE_ID"];
module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction: MessageReaction, user: User) {
        if (reaction.message.id !== process.env["EVENTS_MSG_ID"] && reaction.message.id !== process.env["GENDER_MSG_ID"] && reaction.message.id !== process.env["SEXUALITY_MSG_ID"]) return;

        switch (reaction.emoji.id) {

            case octolingEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(octolingRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(octolingRoleID!);
                    console.log(`Added Octoling role to ${user.username}`);
                }
                return;
            }
            case inklingEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(inklingRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(inklingRoleID!);
                    console.log(`Added Inkling role to ${user.username}`);
                }
                return;
            }
            case anyaPeekEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(animeRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(animeRoleID!);
                    console.log(`Added Anime Night Attendee role to ${user.username}`);
                }
                return;
            }
            case switchEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(switchRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(switchRoleID!);
                    console.log();
                }
                return;
            }
            case xboxEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(xboxRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(xboxRoleID!);
                    console.log();
                }
                return;
            }
            case playstationEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(playstationRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(playstationRoleID!);
                    console.log();
                }
                return;
            }
            case mobileEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(mobileRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(mobileRoleID!);
                    console.log();
                }
                return;
            }
            case pcEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(pcRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(pcRoleID!);
                    console.log();
                }
                return;
            }
            default: {
                console.log('No role found.');
                return;
            }
        }
    }
}
