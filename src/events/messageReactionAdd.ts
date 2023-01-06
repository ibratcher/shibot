import {Events, MessageReaction, User} from "discord.js";
//Events and game role menu environment variables
import * as roleConstants from "./messageReactionImports";

module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction: MessageReaction, user: User) {
        if (reaction.message.id !== process.env["EVENTS_MSG_ID"] && reaction.message.id !== process.env["PLATFORM_MSG_ID"] && reaction.message.id !== process.env["GENDER_MSG_ID"] && reaction.message.id !== process.env["SEXUALITY_MSG_ID"]) return;

        if (!reaction.emoji.id) {
            if (reaction.emoji.name === "🖥️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.pcRoleID!);
                console.log(`Added PC role to ${user.username}`);
                return;
            }
            if (reaction.emoji.name === "📱") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.mobileRoleID!);
                console.log(`Added mobile role to ${user.username}`);
                return;
            }
            if(reaction.emoji.name === "♂️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.maleRoleID!);
                console.log(`Added male role to ${user.username}`);
                return;
            }
            if(reaction.emoji.name === "♀️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.femaleRoleID!);
                console.log(`Added female role to ${user.username}`);
                return;
            }
            if (reaction.emoji.name === "🏳️‍⚧️") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.transRoleID!);
                console.log(`Added trans role to ${user.username}`);
                return;
            }
            if (reaction.emoji.name === "❔") {
                await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.rnsGenderRoleID!);
                console.log(`Added rather not say - Gender role to ${user.username}`);
                return;
            }

        } else {
            switch (reaction.emoji.id) {

                case roleConstants.octolingEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.octolingRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.octolingRoleID!);
                        console.log(`Added Octoling role to ${user.username}`);
                    }
                    return;
                }
                case roleConstants.inklingEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.inklingRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.inklingRoleID!);
                        console.log(`Added Inkling role to ${user.username}`);
                    }
                    return;
                }
                case roleConstants.anyaPeekEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.animeRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.animeRoleID!);
                        console.log(`Added Anime Night Attendee role to ${user.username}`);
                    }
                    return;
                }
                case roleConstants.switchEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.switchRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.switchRoleID!);
                        console.log(`Added Switch role to ${user.username}`);
                    }
                    return;
                }
                case roleConstants.xboxEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.xboxRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.xboxRoleID!);
                        console.log(`Added Xbox role to ${user.username}`);
                    }
                    return;
                }
                case roleConstants.playstationEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.playstationRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.playstationRoleID!);
                        console.log(`Added Playstation role to ${user.username}`);
                    }
                    return;
                }
                case roleConstants.mobileEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.mobileRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.mobileRoleID!);
                        console.log(`Added Mobile role to ${user.username}`);
                    }
                    return;
                }
                case roleConstants.pcEmojiID: {
                    if (!reaction.message.guild!.members.cache.get(user.id)!.roles.cache.has(roleConstants.pcRoleID!)) {
                        await reaction.message.guild!.members.cache.get(user.id)!.roles.add(roleConstants.pcRoleID!);
                        console.log(`Added PC role to ${user.username}`);
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
}
