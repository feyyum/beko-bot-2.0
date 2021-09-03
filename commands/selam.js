const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('selam')
		.setDescription('Premium Selamlama Hizmeti'),
	async execute(interaction) {
		await interaction.reply('Aleyküm Selam Canım');
	},
};