const {Events} = require('discord.js');

const octolingEmojiID = process.env.OCTOLING_EMOJI_ID;
const inklingEmojiID = process.env.INKLING_EMOJI_ID;
const anyaPeekEmojiID = process.env.ANYA_EMOJI_ID;
const octolingRoleID = process.env.OCTOLING_ROLE_ID;
const inklingRoleID = process.env.INKLING_ROLE_ID;
const animeRoleID = process.env.ANIME_ROLE_ID;
module.exports = {
    name: Events.MessageReactionRemove,
    async execute(reaction, user) {
        if (reaction.message.id !== process.env.REACTION_MSG_ID) return;

        switch (reaction.emoji.id) {

            case octolingEmojiID: {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(octolingRoleID);
                console.log(`Removed Octoling role from ${user.username}`);

                return;
            }
            case inklingEmojiID: {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(inklingRoleID);
                console.log(`Removed Inkling role from ${user.username}`);

                return;
            }
            case anyaPeekEmojiID: {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(animeRoleID);
                console.log(`Removed Anime Night Attendee role from ${user.username}`);

                return;
            }
            default: {
                console.log('No role found.');
                return;
            }
        }
    }
}