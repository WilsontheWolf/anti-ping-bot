const { Client } = require('discord.js');
const config = require('./config.js');

const client = new Client();

client.on('message', async (message) => {
    if(message.author.id === client.user.id || message.author.bot) return;
    let pings = config.users.filter(u => message.mentions.users.has(u));
    if (pings.length) 
        message.reply(config.message);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} in ${client.guilds.cache.size} guilds.`);
});

client.login(config.token);