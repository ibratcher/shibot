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
const {Client, Collection, GatewayIntentBits, Partials} = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    partials: [Partials.Message, Partials.Reaction],
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions],
});

const fs = require('node:fs');
const path = require('node:path');

client.commands = new Collection();

//Command handler section
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

//Event handler section
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

eventFiles.forEach(file => {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    console.log(event);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
});

//Log discord.js issues
client.on('debug', console.log);
client.on('warn', console.warn);
client.on('error', console.error);

//Log in to Discord with your client's token
client.login(process.env.TOKEN).then(() => {
    console.log(`Hello! I am ${client.user.tag}`);
});