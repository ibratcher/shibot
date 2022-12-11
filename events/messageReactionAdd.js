const {Events} = require('discord.js');

const octolingEmojiID = process.env.OCTOLING_EMOJI_ID;
const inklingEmojiID = process.env.INKLING_EMOJI_ID;
const anyaPeekEmojiID = process.env.ANYA_EMOJI_ID;
const octolingRoleID = process.env.OCTOLING_ROLE_ID;
const inklingRoleID = process.env.INKLING_ROLE_ID;
const animeRoleID = process.env.ANIME_ROLE_ID;

module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction, user) {
        if (reaction.message.id !== process.env.REACTION_MSG_ID) return;

        switch (reaction.emoji.id) {

            case octolingEmojiID: {
                if (!reaction.message.guild.members.cache.get(user.id).roles.cache.has(octolingRoleID)) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(octolingRoleID);
                    await console.log(`Added Octoling role to ${user.username}`);
                }
                return;
            }
            case inklingEmojiID: {
                if (!reaction.message.guild.members.cache.get(user.id).roles.cache.has(inklingRoleID)) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(inklingRoleID);
                    await console.log(`Added Inkling role to ${user.username}`);
                }
                return;
            }
            case anyaPeekEmojiID: {
                if (!reaction.message.guild.members.cache.get(user.id).roles.cache.has(animeRoleID)) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(animeRoleID);
                    await console.log(`Added Anime Night Attendee role to ${user.username}`);
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