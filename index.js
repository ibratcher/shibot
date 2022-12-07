/**
 * @namespace GatewayIntentBits.Guilds
 */
/**
 * @namespace GatewayIntentBits.GuildMessages
 */
/**
 * @namespace GatewayIntentBits.MessageContent
 */
/**
 * @namespace GatewayIntentBits.GuildMessageReactions
  */
const {Client, Collection, GatewayIntentBits, Events, Partials} = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    partials: [Partials.Message, Partials.Reaction],
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions],
});

const fs = require('node:fs');
const path = require('node:path');

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction, client);
    } catch (error) {
        console.error(error);
        await interaction.reply({content: `${error}`, ephemeral: true});
    }
});
//Reaction roles from environment variables
const octolingEmojiID = process.env.OCTOLING_EMOJI_ID;
const inklingEmojiID = process.env.INKLING_EMOJI_ID;
const anyaPeekEmojiID = process.env.ANYA_EMOJI_ID;
const octolingRoleID = process.env.OCTOLING_ROLE_ID;
const inklingRoleID = process.env.INKLING_ROLE_ID;
const animeRoleID = process.env.ANIME_ROLE_ID;

//Reaction role functionality that first checks the message ID, then adds the role to the user.
client.on(Events.MessageReactionAdd, async (messageReaction, user) => {
    if(messageReaction.message.id !== '1049902399202009138' ) return;

    switch (messageReaction.emoji.id) {

        case octolingEmojiID: {
            if(!messageReaction.message.guild.members.cache.get(user.id).roles.cache.has(octolingRoleID)) {
                await messageReaction.message.guild.members.cache.get(user.id).roles.add(octolingRoleID);
                console.log(`Added Octoling role to ${user.username}`);
            }
            break;
        }
        case inklingEmojiID: {
            if(!messageReaction.message.guild.members.cache.get(user.id).roles.cache.has(inklingRoleID)) {
                await messageReaction.message.guild.members.cache.get(user.id).roles.add(inklingRoleID);
                console.log(`Added Inkling role to ${user.username}`);
            }
            break;
        }
        case anyaPeekEmojiID: {
            if(!messageReaction.message.guild.members.cache.get(user.id).roles.cache.has(animeRoleID)) {
                await messageReaction.message.guild.members.cache.get(user.id).roles.add(animeRoleID);
                console.log(`Added Anya role to ${user.username}`);
            }
            break;
        }
        default: {
            console.log('No role found.');
            break;
        }
    }
});
client.on(Events.MessageReactionRemove, async (messageReaction, user) => {
    if(messageReaction.message.id !== '1049902399202009138' ) return;

    switch (messageReaction.emoji.id) {

        case octolingEmojiID: {
            if (messageReaction.message.guild.members.cache.get(user.id).roles.cache.has(octolingRoleID)) {
                await messageReaction.message.guild.members.cache.get(user.id).roles.remove(octolingRoleID);
                console.log(`Removed Octoling role from ${user.username}`);
            }
            break;
        }
        case inklingEmojiID: {
            if (messageReaction.message.guild.members.cache.get(user.id).roles.cache.has(inklingRoleID)) {
                await messageReaction.message.guild.members.cache.get(user.id).roles.remove(inklingRoleID);
                console.log(`Removed Inkling role from ${user.username}`);
            }
            break;
        }
        case anyaPeekEmojiID: {
            if (messageReaction.message.guild.members.cache.get(user.id).roles.cache.has(animeRoleID)) {
                await messageReaction.message.guild.members.cache.get(user.id).roles.remove(animeRoleID);
                console.log(`Removed Anime Night Attendee role from ${user.username}`);
            }
            break;
        }
        default: {
            console.log('No role found.');
            break;
        }
    }
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN).then(() => {
    console.log(`Hello! I am ${client.user.tag}`);
});