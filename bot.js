const Discord   = require("discord.js");
const client    = require("Discord.Client");

client.on('ready', () => {
  console.log('ready');
})

client.login(process.env.BOT_TOKEN);
