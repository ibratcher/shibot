/**
 * @namespace GatewayIntentBits.Guilds
 */
/**
 * @namespace GatewayIntentBits.GuildMessages
 */
/**
 * @namespace GatewayIntentBits.MessageContent
 */

const {Client, Collection, GatewayIntentBits, Events} = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
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
// Log in to Discord with your client's token
client.login(process.env.TOKEN).then(() => {
    console.log(`Hello! I am ${client.user.tag}`);
});