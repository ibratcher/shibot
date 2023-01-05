import {Events, MessageReaction, User} from "discord.js";
//Events and game role menu environment variables
import * as consts from "./messageReactionImports";
module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction: MessageReaction, user: User) {
        if (reaction.message.id !== process.env["EVENTS_MSG_ID"] && reaction.message.id !== process.env["GENDER_MSG_ID"] && reaction.message.id !== process.env["SEXUALITY_MSG_ID"]) return;

        switch (reaction.emoji.id) {

            case consts.octolingEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.octolingRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.octolingRoleID!);
                    console.log(`Added Octoling role to ${user.username}`);
                }
                return;
            }
            case consts.inklingEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.inklingRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.inklingRoleID!);
                    console.log(`Added Inkling role to ${user.username}`);
                }
                return;
            }
            case consts.anyaPeekEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.animeRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.animeRoleID!);
                    console.log(`Added Anime Night Attendee role to ${user.username}`);
                }
                return;
            }
            case consts.switchEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.switchRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.switchRoleID!);
                    console.log(`Added Switch role to ${user.username}`);
                }
                return;
            }
            case consts.xboxEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.xboxRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.xboxRoleID!);
                    console.log(`Added Xbox role to ${user.username}`);                }
                return;
            }
            case consts.playstationEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.playstationRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.playstationRoleID!);
                    console.log(`Added Playstation role to ${user.username}`);                }
                return;
            }
            case consts.mobileEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.mobileRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.mobileRoleID!);
                    console.log(`Added Mobile role to ${user.username}`);                }
                return;
            }
            case consts.pcEmojiID: {
                if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(consts.pcRoleID!)) {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.add(consts.pcRoleID!);
                    console.log(`Added PC role to ${user.username}`);                }
                return;
            }
            default: {
                console.log('No role found.');
                return;
            }
        }
    }
}
