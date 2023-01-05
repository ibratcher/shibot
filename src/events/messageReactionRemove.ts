import {Events, MessageReaction, User} from "discord.js";
import * as consts from "./messageReactionImports";
module.exports = {
    name: Events.MessageReactionRemove,
    async execute(reaction: MessageReaction, user: User) {
        if (reaction.message.id !== process.env["EVENTS_MSG_ID"] && reaction.message.id !== process.env["GENDER_MSG_ID"] && reaction.message.id !== process.env["SEXUALITY_MSG_ID"]) return;
        switch (reaction.emoji.id) {

            case consts.octolingEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.octolingRoleID!);
                console.log(`Removed Octoling role from ${user.username}`);

                return;
            }
            case consts.inklingEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.inklingRoleID!);
                console.log(`Removed Inkling role from ${user.username}`);

                return;
            }
            case consts.anyaPeekEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.animeRoleID!);
                console.log(`Removed Anime Night Attendee role from ${user.username}`);

                return;
            }
            case consts.switchEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.switchRoleID!);
                console.log(`Removed Switch role from ${user.username}`);
                return;
            }
            case consts.xboxEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.xboxRoleID!);
                console.log(`Removed Xbox role from ${user.username}`);
                return;
            }
            case consts.playstationEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.playstationRoleID!);
                console.log(`Removed Playstation role from ${user.username}`);
                return;
            }
            case consts.mobileEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.mobileRoleID!);
                console.log(`Removed mobile role from ${user.username}`)
                return;
            }
            case consts.pcEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(consts.pcRoleID!);
                console.log(`Removed PC role from ${user.username}`)
                return;
            }

            default: {
                console.log('No role found.');
                return;
            }
        }
    }
}