const Discord = require('discord.js');
const client = new Discord.Client();
 

const prefix = '-';
const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;
(port);
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('one grid mod!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

 

client.login('NzU2OTM2MzIzOTMxMDQ2MDAx.X2ZF4g.wdPGZSP3NGFiqD3CRdfulH1REKQ')});
