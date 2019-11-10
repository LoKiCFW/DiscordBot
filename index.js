const Discord   = require('discord.js');
const bot       = new DiscordClient();

const token     = 'NjQyNzg4MDk4ODU3NzYyODc3.Xchbmg.4W4eR7m6spW5_7fVJsjMLdBL8Mo';

bot.on('ready', () =>{
    console.log('ready');
})

bot.login(token);