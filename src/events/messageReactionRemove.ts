import {Events, MessageReaction, User} from "discord.js";
import {octolingEmojiID, octolingRoleID, inklingEmojiID, inklingRoleID, anyaPeekEmojiID, animeRoleID, switchEmojiID, switchRoleID, xboxEmojiID, xboxRoleID} from "./messageReactionImports";

module.exports = {
    name: Events.MessageReactionRemove,
    async execute(reaction: MessageReaction, user: User) {
        if (reaction.message.id !== process.env["EVENTS_MSG_ID"] && reaction.message.id !== process.env["GENDER_MSG_ID"] && reaction.message.id !== process.env["SEXUALITY_MSG_ID"]) return;
        switch (reaction.emoji.id) {

            case octolingEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(octolingRoleID!);
                console.log(`Removed Octoling role from ${user.username}`);

                return;
            }
            case inklingEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(inklingRoleID!);
                console.log(`Removed Inkling role from ${user.username}`);

                return;
            }
            case anyaPeekEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(animeRoleID!);
                console.log(`Removed Anime Night Attendee role from ${user.username}`);

                return;
            }
            case switchEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(switchRoleID!);
                console.log(`Removed Switch role from ${user.username}`);
                return;
            }
            case xboxEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(xboxRoleID!);
                console.log(`Removed Xbox role from ${user.username}`);
                return;
            }
            case playstationEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(playstationRoleID!);
                console.log(`Removed Playstation role from ${user.username}`);
                return;
            }
            case mobileEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(mobileRoleID!);
                console.log(`Removed mobile role from ${user.username}`)
                return;
            }
            case pcEmojiID: {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(pcRoleID!);
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