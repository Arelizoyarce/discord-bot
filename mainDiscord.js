import fs from 'node:fs'
import path from 'node:path';

import {Client, GatewayIntentBits}from 'discord.js'

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });
bot.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	bot.commands.set(command.data.name, command);
}


bot.on('ready', ()=>{
    console.log('bot is readys')
})
bot.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });
bot.login('MTAwMjY5MjI5NTM4NjIxODU2Ng.GFjlBM.aXYDgcp2LWercgZ-tI2LE-FylEwYSgfxIwTVuw')
.then(()=>{
    console.log(`${bot.user.username}, se ha conectado`)
})