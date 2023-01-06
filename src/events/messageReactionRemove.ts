import {Events, MessageReaction, User} from "discord.js";
import * as roleConstants from "./messageReactionImports";

module.exports = {
    name: Events.MessageReactionRemove,
    async execute(reaction: MessageReaction, user: User) {
        if (reaction.message.id !== process.env["EVENTS_MSG_ID"] && reaction.message.id !== process.env["PLATFORM_MSG_ID"] && reaction.message.id !== process.env["GENDER_MSG_ID"] && reaction.message.id !== process.env["SEXUALITY_MSG_ID"]) return;
        if (!reaction.emoji.id) {
            if (reaction.emoji.name === "🖥️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.pcRoleID!);
                console.log(`Removed PC role from ${user.username}`);
                return;
            }
            if (reaction.emoji.name === "📱") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.mobileRoleID!);
                console.log(`Removed mobile role from ${user.username}`);
                return;
            }
            if(reaction.emoji.name === "♂️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.maleRoleID!);
                console.log(`Removed male role from ${user.username}`);
                return;
            }
            if(reaction.emoji.name === "♀️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.femaleRoleID!);
                console.log(`Removed female role from ${user.username}`);
                return;
            }
            if(reaction.emoji.name === "🏳️‍⚧️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.transRoleID!);
                console.log(`Removed trans role from ${user.username}`);
                return;
            }
            if (reaction.emoji.name === "❔") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.rnsGenderRoleID!);
                console.log(`Removed Rather Not Say - Gender role from ${user.username}`);
                return;
            }
        } else {
            switch (reaction.emoji.id) {

                case roleConstants.octolingEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.octolingRoleID!);
                    console.log(`Removed Octoling role from ${user.username}`);

                    return;
                }
                case roleConstants.inklingEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.inklingRoleID!);
                    console.log(`Removed Inkling role from ${user.username}`);

                    return;
                }
                case roleConstants.anyaPeekEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.animeRoleID!);
                    console.log(`Removed Anime Night Attendee role from ${user.username}`);

                    return;
                }
                case roleConstants.switchEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.switchRoleID!);
                    console.log(`Removed Switch role from ${user.username}`);
                    return;
                }
                case roleConstants.xboxEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.xboxRoleID!);
                    console.log(`Removed Xbox role from ${user.username}`);
                    return;
                }
                case roleConstants.playstationEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.playstationRoleID!);
                    console.log(`Removed Playstation role from ${user.username}`);
                    return;
                }
                case roleConstants.mobileEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.mobileRoleID!);
                    console.log(`Removed mobile role from ${user.username}`)
                    return;
                }
                case roleConstants.pcEmojiID: {
                    await reaction.message.guild!.members.cache.get(user.id)!.roles.remove(roleConstants.pcRoleID!);
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
}