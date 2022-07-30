const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bach')
		.setDescription('Replies with Bach'),
	async execute(interaction) {
		await interaction.reply('Hi its bach');
	},
};