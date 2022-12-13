
const {Client, Collection, GatewayIntentBits, Partials} = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

import fs = require('node:fs');
import path = require('node:path');

client.commands = new Collection();

//Command handler section
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file: string) => file.endsWith('.js'));

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
const eventFiles = fs.readdirSync(eventsPath).filter((file: string) => file.endsWith('.js'));

eventFiles.forEach((file: any) => {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    console.log(event);
    if (event.once) {
        client.once(event.name, (...args: any) => event.execute(...args));
    } else {

        client.on(event.name, (...args: any) => event.execute(...args));
    }
});

//Log in to Discord with your client's token
client.login(process.env['TOKEN']).then(() => {
    console.log(`Hello! I am ${client.user.tag}`);
});